import type { AIProvider } from "../providers/ai-provider.js";
import type { AIMessage, AIRequest } from "../types/ai-request.js";
import type { RepairContext } from "../types/repair-context.js";
import type { DiagnosticState } from "../types/diagnostic-state.js";

import { prisma } from "../../config/prisma.js";

import { buildRepairAssistantPrompt } from "../prompts/repair-assistant.prompt.js";

import { AIConversationService } from "./ai-conversation.service.js";
import { DiagnosticExtractorService } from "./diagnostic-extractor.service.js";
import { DiagnosticStateService } from "./diagnostic-state.service.js";
import { createEmptyDiagnosticState } from "./diagnostic-state.factory.js";

export class AIService {
  constructor(
    private readonly provider: AIProvider,
    private readonly conversationService: AIConversationService,
    private readonly diagnosticExtractor: DiagnosticExtractorService,
    private readonly diagnosticStateService: DiagnosticStateService
  ) {}

  async generateResponse(
    ticketId: number,
    context: RepairContext,
    question: string
  ): Promise<string> {
    // ============================================================
    // 1. LOAD EXISTING DIAGNOSTIC STATE
    // ============================================================

    const repairTicket = await prisma.repairTicket.findUnique({
      where: {
        id: ticketId,
      },
      select: {
        diagnosticState: true,
      },
    });

    if (!repairTicket) {
      throw new Error("REPAIR_TICKET_NOT_FOUND");
    }

    const currentState: DiagnosticState =
      repairTicket.diagnosticState
        ? (repairTicket.diagnosticState as unknown as DiagnosticState)
        : createEmptyDiagnosticState();

    // ============================================================
    // 2. EXTRACT NEW INFORMATION FROM TECHNICIAN MESSAGE
    // ============================================================

    const diagnosticUpdate =
      await this.diagnosticExtractor.extract(
        question,
        context,
        currentState
      );

    // ============================================================
    // 3. UPDATE DIAGNOSTIC STATE
    // ============================================================

    const updatedState =
      this.diagnosticStateService.update(
        currentState,
        diagnosticUpdate
      );

    // ============================================================
    // 4. PERSIST UPDATED DIAGNOSTIC STATE
    // ============================================================

    await prisma.repairTicket.update({
      where: {
        id: ticketId,
      },
      data: {
        diagnosticState: JSON.parse(JSON.stringify(updatedState)),
      },
    });

    // ============================================================
    // 5. LOAD CONVERSATION HISTORY
    // ============================================================

    const conversation =
      await this.conversationService.getOrCreateConversation(
        ticketId
      );

    const previousMessages: AIMessage[] =
      conversation.messages.map((message) => ({
        role:
          message.role === "assistant"
            ? "assistant"
            : "user",

        content: message.content,
      }));

    // ============================================================
    // 6. BUILD SYSTEM PROMPT
    // ============================================================

    const baseSystemPrompt =
      buildRepairAssistantPrompt(context);

    const diagnosticStatePrompt = `
CURRENT DIAGNOSTIC STATE

The following is VoltOps' current structured understanding
of this repair.

Use it as working diagnostic memory.

Do not repeat information to the technician unless it is
necessary for the current response.

Do not treat hypotheses as confirmed diagnoses.

Do not ask for information that is already known.

Diagnostic State:

${JSON.stringify(updatedState, null, 2)}
`;

    const systemPrompt = `
${baseSystemPrompt}

${diagnosticStatePrompt}
`;

    // ============================================================
    // 7. BUILD CURRENT USER MESSAGE
    // ============================================================

    const userMessage: AIMessage = {
      role: "user",
      content: question,
    };

    // ============================================================
    // 8. SEND CONTEXT + CONVERSATION + DIAGNOSTIC STATE TO AI
    // ============================================================

    const request: AIRequest = {
      systemPrompt,

      messages: [
        ...previousMessages,
        userMessage,
      ],
    };

    const response =
      await this.provider.generateText(request);

    // ============================================================
    // 9. SAVE TECHNICIAN MESSAGE
    // ============================================================

    await this.conversationService.saveMessage(
      conversation.id,
      userMessage
    );

    // ============================================================
    // 10. SAVE AI RESPONSE
    // ============================================================

    await this.conversationService.saveMessage(
      conversation.id,
      {
        role: "assistant",
        content: response,
      }
    );

    // ============================================================
    // 11. RETURN NATURAL AI RESPONSE
    // ============================================================

    return response;
  }

  async getConversation(ticketId: number) {
    return this.conversationService.getConversation(
      ticketId
    );
  }
}