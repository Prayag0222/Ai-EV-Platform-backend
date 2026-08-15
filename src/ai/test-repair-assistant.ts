import "dotenv/config";
import { RepairContextService } from "./context/repair-context.service.js";
import { aiService } from "./index.js";

const ticketId = Number(process.argv[2]);
const shopId = process.argv[3];

if (!ticketId || !shopId) {
  throw new Error(
    "Usage: npx tsx src/ai/test-repair-assistant.ts <ticketId> <shopId>"
  );
}

const contextService = new RepairContextService();

const context = await contextService.buildContext(ticketId, shopId);

const response = await aiService.generateResponse(
  ticketId,
  context,
  "The battery is not working correctly. What should I check first, and what could be the possible causes?"
);

console.log("\n===== VOLTOPS AI =====\n");
console.log(response);