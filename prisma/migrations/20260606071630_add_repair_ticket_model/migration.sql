-- CreateTable
CREATE TABLE "repairTicket" (
    "id" SERIAL NOT NULL,
    "issueCategory" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "technicianNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "repairTicket_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "repairTicket" ADD CONSTRAINT "repairTicket_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
