export interface AIMessage {
  role: "user" | "assistant";
  content: string;
}

export interface AIRequest {
  systemPrompt: string;
  messages: AIMessage[];
}