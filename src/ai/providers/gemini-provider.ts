import { GoogleGenAI } from "@google/genai";
import type { AIProvider } from "./ai-provider.js";
import type { AIRequest } from "../types/ai-request.js";

export class GeminiProvider implements AIProvider {
  private readonly client: GoogleGenAI;
  private readonly model: string;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured.");
    }

    this.client = new GoogleGenAI({
      apiKey,
    });

    this.model = process.env.GEMINI_MODEL ?? "gemini-3.6-flash";
  }

 async generateText(request: AIRequest): Promise<string> {
  const contents = request.messages.map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [{ text: message.content }],
  }));

  const response = await this.client.models.generateContent({
    model: this.model,
    config: {
      systemInstruction: request.systemPrompt,
    },
    contents,
  });

  const text = response.text;

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  return text;
}
}