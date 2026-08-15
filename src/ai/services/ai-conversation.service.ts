import { prisma } from "../../config/prisma.js";
import type { AIMessage } from "../types/ai-request.js";

export class AIConversationService {
  async getOrCreateConversation(ticketId: number) {
    const existingConversation = await prisma.aiConversation.findUnique({
      where: {
        ticketId,
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    if (existingConversation) {
      return existingConversation;
    }

    return prisma.aiConversation.create({
      data: {
        ticketId,
      },
      include: {
        messages: true,
      },
    });
  }
  async getConversation(ticketId: number) {
  return prisma.aiConversation.findUnique({
    where: {
      ticketId,
    },
    include: {
      messages: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });
}

  async saveMessage(
    conversationId: string,
    message: AIMessage
  ): Promise<void> {
    await prisma.aiMessage.create({
      data: {
        conversationId,
        role: message.role,
        content: message.content,
      },
    });
  }





}
