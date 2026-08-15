import { AIService } from "./services/ai.services.js";
import { AIConversationService } from "./services/ai-conversation.service.js";
import { DiagnosticExtractorService } from "./services/diagnostic-extractor.service.js";
import { DiagnosticStateService } from "./services/diagnostic-state.service.js";
import { GeminiProvider } from "./providers/gemini-provider.js";

const geminiProvider = new GeminiProvider();

const conversationService =
  new AIConversationService();

const diagnosticExtractor =
  new DiagnosticExtractorService();

const diagnosticStateService =
  new DiagnosticStateService();

export const aiService = new AIService(
  geminiProvider,
  conversationService,
  diagnosticExtractor,
  diagnosticStateService
);