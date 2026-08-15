import "dotenv/config";

import { GeminiProvider } from "./providers/gemini-provider.js";

const provider = new GeminiProvider();

const response = await provider.generateText({
  systemPrompt: "You are VoltOps AI. Respond briefly.",
  messages: [
    {
      role: "user",
      content:
        "Reply with exactly: VoltOps AI connection successful.",
    },
  ],
});

console.log(response);