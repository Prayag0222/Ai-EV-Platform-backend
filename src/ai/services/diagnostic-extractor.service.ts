import type { RepairContext } from "../types/repair-context.js";
import type { DiagnosticState } from "../types/diagnostic-state.js";
import type { DiagnosticUpdate } from "../types/diagnostic-update.js";
import { buildDiagnosticExtractorPrompt } from "../prompts/diagnostic-extractor.prompt.js";
import { diagnosticUpdateSchema } from "../schemas/diagnostic-update.schema.js";
import { GoogleGenAI } from "@google/genai";

export class DiagnosticExtractorService {
  private readonly ai: GoogleGenAI;

  constructor() {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is missing.");
    }

    this.ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });
  }

  async extract(
    technicianMessage: string,
    context: RepairContext,
    diagnosticState?: DiagnosticState
  ): Promise<DiagnosticUpdate> {
    const prompt = `
${buildDiagnosticExtractorPrompt(context)}

CURRENT DIAGNOSTIC STATE:

${JSON.stringify(diagnosticState ?? null, null, 2)}

LATEST TECHNICIAN MESSAGE:

${technicianMessage}

Extract only the new diagnostic information from the latest technician message.
Return ONLY valid JSON matching the provided schema.
`;

    const response = await this.ai.models.generateContent({
      model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: diagnosticUpdateSchema,
      },
    });

    if (!response.text) {
      throw new Error("Diagnostic extractor returned an empty response.");
    }

    let parsed: unknown;

    try {
      parsed = JSON.parse(response.text);
    } catch {
      throw new Error(
        "Diagnostic extractor returned invalid JSON."
      );
    }

    return parsed as DiagnosticUpdate;
  }
}