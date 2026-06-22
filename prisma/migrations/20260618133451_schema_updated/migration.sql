/*
  Warnings:

  - You are about to drop the column `vehicleModel` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `technicianNotes` on the `repairTicket` table. All the data in the column will be lost.
  - The `status` column on the `repairTicket` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `specialization` on the `technician` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('PENDING', 'DIAGNOSING', 'IN_SERVICE', 'RESOLVED', 'DELIVERED');

-- CreateEnum
CREATE TYPE "TicketPriority" AS ENUM ('LOW', 'STANDARD', 'HIGH', 'URGENT');

-- CreateEnum
CREATE TYPE "TechnicianSpecialization" AS ENUM ('BATTERY', 'BMS', 'CONTROLLER', 'MOTOR', 'GENERAL');

-- CreateEnum
CREATE TYPE "SaleType" AS ENUM ('REPAIR', 'COUNTER');

-- AlterTable
ALTER TABLE "customer" DROP COLUMN "vehicleModel";

-- AlterTable
ALTER TABLE "repairTicket" DROP COLUMN "technicianNotes",
ADD COLUMN     "aiSummary" TEXT,
ADD COLUMN     "bay" TEXT,
ADD COLUMN     "closedAt" TIMESTAMP(3),
ADD COLUMN     "estimatedCost" DOUBLE PRECISION,
ADD COLUMN     "finalCost" DOUBLE PRECISION,
ADD COLUMN     "manufacturer" TEXT,
ADD COLUMN     "priority" "TicketPriority" NOT NULL DEFAULT 'STANDARD',
ADD COLUMN     "technicianId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "vehicleId" INTEGER,
DROP COLUMN "status",
ADD COLUMN     "status" "TicketStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "technician" DROP COLUMN "specialization",
ADD COLUMN     "specialization" "TechnicianSpecialization" NOT NULL;

-- CreateTable
CREATE TABLE "technicianNote" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "aiSummary" TEXT,
    "rawVoiceText" TEXT,
    "structuredText" TEXT NOT NULL,
    "quickTags" TEXT[],
    "imageUrls" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "technicianNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timelineEvent" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "timelineEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usedPart" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "inventoryId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "lockedCost" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usedPart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory" (
    "id" SERIAL NOT NULL,
    "partName" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "stockLevel" INTEGER NOT NULL DEFAULT 0,
    "retailPrice" DOUBLE PRECISION NOT NULL,
    "lowStockAlert" INTEGER NOT NULL DEFAULT 5,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice" (
    "id" SERIAL NOT NULL,
    "invoiceNo" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerPhone" TEXT NOT NULL,
    "items" JSONB NOT NULL,
    "laborCharge" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "grandTotal" DOUBLE PRECISION NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "saleType" "SaleType" NOT NULL,
    "ticketId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" SERIAL NOT NULL,
    "vin" TEXT NOT NULL,
    "vehicleModel" TEXT NOT NULL,
    "batteryPackSerial" TEXT,
    "batteryCapacity" TEXT,
    "batterySoh" INTEGER,
    "batteryCycles" INTEGER,
    "batteryTemp" TEXT,
    "odometer" TEXT,
    "lastServiceDaysAgo" INTEGER,
    "manufacturer" TEXT,
    "modelYear" INTEGER,
    "healthScore" INTEGER,
    "lastAiCheck" TIMESTAMP(3),
    "customerId" TEXT NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "inventory_sku_key" ON "inventory"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_invoiceNo_key" ON "invoice"("invoiceNo");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_ticketId_key" ON "invoice"("ticketId");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_vin_key" ON "Vehicle"("vin");

-- AddForeignKey
ALTER TABLE "repairTicket" ADD CONSTRAINT "repairTicket_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "technician"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repairTicket" ADD CONSTRAINT "repairTicket_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "technicianNote" ADD CONSTRAINT "technicianNote_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "repairTicket"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "timelineEvent" ADD CONSTRAINT "timelineEvent_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "repairTicket"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usedPart" ADD CONSTRAINT "usedPart_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "repairTicket"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usedPart" ADD CONSTRAINT "usedPart_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "repairTicket"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
