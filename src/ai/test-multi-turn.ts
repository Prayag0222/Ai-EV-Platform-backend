import "dotenv/config";
import { RepairContextService } from "./context/repair-context.service.js";
import { aiService } from "./index.js";
import type { AIMessage } from "./types/ai-request.js";

const ticketId = Number(process.argv[2]);
const shopId = process.argv[3];

if (!ticketId || !shopId) {
  throw new Error(
    "Usage: npx tsx src/ai/test-multi-turn.ts <ticketId> <shopId>"
  );
}

const contextService = new RepairContextService();

const context = await contextService.buildContext(ticketId, shopId);

const conversation: AIMessage[] = [];

const firstQuestion =
  "The battery is not working correctly. What should I check first?";

const firstResponse = await aiService.generateResponse(
  ticketId,
  context,
  firstQuestion
);

console.log("\n===== TURN 1 =====\n");
console.log("Technician:", firstQuestion);
console.log("VoltOps AI:", firstResponse);

conversation.push(
  {
    role: "user",
    content: firstQuestion,
  },
  {
    role: "assistant",
    content: firstResponse,
  }
);

const secondQuestion = "I measured 57V under load. What does that tell us?";

const secondResponse = await aiService.generateResponse(
  ticketId,
  context,
  secondQuestion,
  
);

console.log("\n===== TURN 2 =====\n");
console.log("Technician:", secondQuestion);
console.log("VoltOps AI:", secondResponse);