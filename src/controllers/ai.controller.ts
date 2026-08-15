import type { Request, Response } from "express";
import { prisma } from "../config/prisma.js";
import { RepairContextService } from "../ai/context/repair-context.service.js";
import { aiService } from "../ai/index.js";
import { AIConversationService } from "../ai/services/ai-conversation.service.js";


interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
    shopId: string | null;
  };
}

interface AIChatBody {
  ticketId: number;
  message: string;
}

const contextService = new RepairContextService();
const conversationService = new AIConversationService();

export const chatWithAI = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const shopId = req.user?.shopId;

    if (!shopId) {
      res.status(403).json({
        error: "Shop context is missing from authenticated session.",
      });
      return;
    }

    const { ticketId, message } = req.body as AIChatBody;

    if (!Number.isInteger(ticketId) || ticketId <= 0) {
      res.status(400).json({
        error: "A valid repair ticket ID is required.",
      });
      return;
    }

    if (typeof message !== "string" || !message.trim()) {
      res.status(400).json({
        error: "AI message cannot be empty.",
      });
      return;
    }

    const ticket = await prisma.repairTicket.findFirst({
      where: {
        id: ticketId,
        shopId,
      },
      select: {
        id: true,
      },
    });

    if (!ticket) {
      res.status(404).json({
        error: "Repair ticket not found.",
      });
      return;
    }

    const context = await contextService.buildContext(
      ticketId,
      shopId
    );

    const response = await aiService.generateResponse(
      ticketId,
      context,
      message.trim()
    );

    res.status(200).json({
      success: true,
      response,
    });
  } catch (error: unknown) {
    const errorInstance =
      error instanceof Error ? error : new Error(String(error));

    console.error("VoltOps AI Chat Error:", errorInstance);

    res.status(500).json({
      error: "VoltOps AI could not process the request.",
    });
  }
};





export const getAIConversation = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const shopId = req.user?.shopId;

    if (!shopId) {
      res.status(403).json({
        error: "Shop context is missing from authenticated session.",
      });
      return;
    }

    const ticketId = Number(req.params.ticketId);

    if (!Number.isInteger(ticketId) || ticketId <= 0) {
      res.status(400).json({
        error: "A valid repair ticket ID is required.",
      });
      return;
    }

    const ticket = await prisma.repairTicket.findFirst({
      where: {
        id: ticketId,
        shopId,
      },
      select: {
        id: true,
      },
    });

    if (!ticket) {
      res.status(404).json({
        error: "Repair ticket not found.",
      });
      return;
    }

    const conversation = await conversationService.getConversation(
      ticketId
    );

    res.status(200).json({
      success: true,
      messages:
        conversation?.messages.map((message) => ({
          role: message.role,
          content: message.content,
        })) ?? [],
    });
  } catch (error: unknown) {
    const errorInstance =
      error instanceof Error ? error : new Error(String(error));

    console.error("VoltOps AI Conversation History Error:", errorInstance);

    res.status(500).json({
      error: "VoltOps AI conversation history could not be loaded.",
    });
  }
};