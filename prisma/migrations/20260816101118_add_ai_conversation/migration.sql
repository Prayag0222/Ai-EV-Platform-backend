-- AlterTable
ALTER TABLE "repairTicket" ADD COLUMN     "diagnosticState" JSONB;

-- CreateTable
CREATE TABLE "aiConversation" (
    "id" TEXT NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "aiConversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aiMessage" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "aiMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "aiConversation_ticketId_key" ON "aiConversation"("ticketId");

-- AddForeignKey
ALTER TABLE "aiConversation" ADD CONSTRAINT "aiConversation_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "repairTicket"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aiMessage" ADD CONSTRAINT "aiMessage_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "aiConversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
