import type { AIRequest } from "../types/ai-request.js";

export interface AIProvider {
  generateText(request: AIRequest): Promise<string>;
}