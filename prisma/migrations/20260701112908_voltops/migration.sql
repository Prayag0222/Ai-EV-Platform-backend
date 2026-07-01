-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'OWNER', 'TECHNICIAN');

-- CreateEnum
CREATE TYPE "TechnicianStatus" AS ENUM ('AVAILABLE', 'BUSY', 'ON_LEAVE');

-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('PENDING', 'DIAGNOSING', 'IN_SERVICE', 'RESOLVED', 'DELIVERED');

-- CreateEnum
CREATE TYPE "TicketPriority" AS ENUM ('LOW', 'STANDARD', 'HIGH', 'URGENT');

-- CreateEnum
CREATE TYPE "TechnicianSpecialization" AS ENUM ('BATTERY', 'BMS', 'CONTROLLER', 'MOTOR', 'GENERAL');

-- CreateEnum
CREATE TYPE "SaleType" AS ENUM ('REPAIR', 'COUNTER');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT NOT NULL,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shopId" TEXT NOT NULL,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "repairTicket" (
    "id" SERIAL NOT NULL,
    "issueCategory" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "TicketStatus" NOT NULL DEFAULT 'PENDING',
    "bay" TEXT,
    "priority" "TicketPriority" NOT NULL DEFAULT 'STANDARD',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3),
    "estimatedCost" DOUBLE PRECISION,
    "finalCost" DOUBLE PRECISION,
    "laborHours" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "laborRate" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "taxRate" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "aiSummary" TEXT,
    "manufacturer" TEXT,
    "customerId" TEXT NOT NULL,
    "technicianId" TEXT,
    "vehicleId" INTEGER,
    "shopId" TEXT NOT NULL,

    CONSTRAINT "repairTicket_pkey" PRIMARY KEY ("id")
);

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
    "shopId" TEXT NOT NULL,

    CONSTRAINT "inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice" (
    "id" SERIAL NOT NULL,
    "invoiceNo" TEXT NOT NULL,
    "shopName" TEXT DEFAULT 'VoltOps',
    "shopAddress" TEXT DEFAULT '',
    "gstNumber" TEXT,
    "customerName" TEXT NOT NULL,
    "customerAddress" TEXT NOT NULL DEFAULT '',
    "customerPhone" TEXT NOT NULL,
    "items" JSONB NOT NULL,
    "laborCharge" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "tax" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "grandTotal" DOUBLE PRECISION NOT NULL,
    "paymentStatus" TEXT NOT NULL DEFAULT 'UNPAID',
    "paymentMethod" TEXT NOT NULL DEFAULT 'NONE',
    "notes" TEXT NOT NULL DEFAULT '',
    "saleType" "SaleType" NOT NULL,
    "ticketId" INTEGER,
    "shopId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "technician" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "specialization" "TechnicianSpecialization" NOT NULL,
    "status" "TechnicianStatus" NOT NULL DEFAULT 'AVAILABLE',
    "experienceYears" INTEGER NOT NULL,
    "address" TEXT,
    "profileImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "shopId" TEXT NOT NULL,

    CONSTRAINT "technician_pkey" PRIMARY KEY ("id")
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
    "lastServiceDate" TIMESTAMP(3),
    "manufacturer" TEXT,
    "modelYear" INTEGER,
    "motorSerial" TEXT,
    "motorType" TEXT,
    "motorNotes" TEXT,
    "controllerSerial" TEXT,
    "controllerVersion" TEXT,
    "controllerNotes" TEXT,
    "healthScore" INTEGER,
    "lastAiCheck" TIMESTAMP(3),
    "customerId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop" (
    "id" TEXT NOT NULL,
    "shopName" TEXT NOT NULL,
    "shopAddress" TEXT,
    "gstNumber" TEXT,
    "shopPhone" TEXT,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "shop_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customer_shopId_phone_key" ON "customer"("shopId", "phone");

-- CreateIndex
CREATE UNIQUE INDEX "inventory_shopId_sku_key" ON "inventory"("shopId", "sku");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_invoiceNo_key" ON "invoice"("invoiceNo");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_ticketId_key" ON "invoice"("ticketId");

-- CreateIndex
CREATE UNIQUE INDEX "technician_shopId_email_key" ON "technician"("shopId", "email");

-- CreateIndex
CREATE UNIQUE INDEX "technician_shopId_employeeId_key" ON "technician"("shopId", "employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_vin_key" ON "Vehicle"("vin");

-- CreateIndex
CREATE UNIQUE INDEX "shop_ownerId_key" ON "shop"("ownerId");

-- AddForeignKey
ALTER TABLE "customer" ADD CONSTRAINT "customer_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repairTicket" ADD CONSTRAINT "repairTicket_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repairTicket" ADD CONSTRAINT "repairTicket_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "technician"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repairTicket" ADD CONSTRAINT "repairTicket_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repairTicket" ADD CONSTRAINT "repairTicket_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "technicianNote" ADD CONSTRAINT "technicianNote_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "repairTicket"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "timelineEvent" ADD CONSTRAINT "timelineEvent_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "repairTicket"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usedPart" ADD CONSTRAINT "usedPart_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "repairTicket"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usedPart" ADD CONSTRAINT "usedPart_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "repairTicket"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "technician" ADD CONSTRAINT "technician_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop" ADD CONSTRAINT "shop_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
