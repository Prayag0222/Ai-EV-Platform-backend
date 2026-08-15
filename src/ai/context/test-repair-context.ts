import "dotenv/config";
import { RepairContextService } from "./repair-context.service.js";

const ticketId = Number(process.argv[2]);
const shopId = process.argv[3];

if (!ticketId || !shopId) {
  throw new Error(
    "Usage: npx tsx src/ai/context/test-repair-context.ts <ticketId> <shopId>"
  );
}

const contextService = new RepairContextService();

const context = await contextService.buildContext(ticketId, shopId);

console.dir(context, { depth: null });