import  { type Request, type Response } from "express";
import { prisma } from '../config/prisma.js';
import { TicketStatus } from "../generated/client/client.js";
import type { Vehicle } from "../generated/client/client.js";

/**
 * 📡 GET /api/technician/dashboard
 * Streams active repair tickets assigned to a mechanic, eager-loading full telemetry matrices.
 */
export async function getTechnicianVehiclesDashboard(req: Request, res: Response): Promise<void> {
  try {
    // ⚡ FIXED: Read standard lowercase 'id' properties from the incoming path parameter
    const queryParam = req.params.id || req.query.id;

    if (!queryParam) {
      res.status(400).json({ success: false, message: "Valid technician tracking identifier required." });
      return;
    }

    const technicianId = Array.isArray(queryParam) ? String(queryParam[0]) : String(queryParam);

    const activeTickets = await prisma.repairTicket.findMany({
      where: {
        technicianId: technicianId, 
        NOT: {
          status: { in: [TicketStatus.DELIVERED,
            TicketStatus.RESOLVED] }
        }
      },
      include: {
        customer: true, 
        vehicle: true,  
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    res.status(200).json({
      success: true,
      tickets: activeTickets
    });
  } catch (error) {
    console.error("Error executing active vehicle stream query:", error);
    res.status(500).json({ success: false, message: "Internal server data compilation fault." });
  }
}
/**
 * 🛠️ PATCH /api/technician/tickets/:id
 * Locates the vehicle connected to a specific ticket and writes active floor telemetry adjustments.
 */
/**
 * 🛠️ PATCH /api/technician/tickets/:id
 * Locates the vehicle connected to a specific ticket and writes active floor telemetry adjustments.
 */
export async function updateVehicleTelemetry(req: Request, res: Response): Promise<void> {
  try {
    // 🧠 Grab the raw id from either params or query defensively
    const rawId = req.params.id || req.query.id;
    const { telemetry } = req.body;

    if (!rawId || !telemetry) {
      res.status(400).json({ success: false, message: "Missing ticket mapping ID or modification payload." });
      return;
    }

    // ⚡ Bulletproof Normalization: Force id to be a 100% pure primitive string
    const idString = Array.isArray(rawId) 
      ? String(rawId[0]) 
      : String(rawId);

    // Now parseInt receives a guaranteed single string, clearing the compiler error!
    const ticketId = parseInt(idString, 10);
    
    if (isNaN(ticketId)) {
      res.status(400).json({ success: false, message: "Ticket parameter mapping must be a clean integer row reference." });
      return;
    }

    // Step 1: Trace the ticket profile row to secure the underlying vehicleId association key
    const targetTicket = await prisma.repairTicket.findUnique({
      where: { id: ticketId }
    });

    if (!targetTicket || !targetTicket.vehicleId) {
      res.status(404).json({ success: false, message: "Target ticket has no historical vehicle garage profile attached." });
      return;
    }
const toNullableInt = (value: any) =>
    value === null || value === undefined
        ? null
        : parseInt(value, 10);
    // Step 2: Clean and parse values defensively to respect database model types
const telemetryUpdates: Record<string, unknown> = {};    
    if (telemetry.vehicleModel !== undefined) telemetryUpdates.vehicleModel = telemetry.vehicleModel;
    if (telemetry.vin !== undefined) telemetryUpdates.vin = telemetry.vin;
    if (telemetry.batteryPackSerial !== undefined) telemetryUpdates.batteryPackSerial = telemetry.batteryPackSerial;
    if (telemetry.batteryCapacity !== undefined) telemetryUpdates.batteryCapacity = telemetry.batteryCapacity;
    if (telemetry.batteryTemp !== undefined) telemetryUpdates.batteryTemp = telemetry.batteryTemp;
    if (telemetry.odometer !== undefined) telemetryUpdates.odometer = telemetry.odometer;

    // Safely parse integers to guarantee strict data integrity compliance
    if (telemetry.batterySoh !== undefined) {
      telemetryUpdates.batterySoh = toNullableInt(telemetry.batterySoh)
    }
    if (telemetry.batteryCycles !== undefined) {
      telemetryUpdates.batteryCycles =
    toNullableInt(telemetry.batteryCycles);
    }
    if (telemetry.lastServiceDaysAgo !== undefined) {
      telemetryUpdates.lastServiceDaysAgo =
    toNullableInt(telemetry.lastServiceDaysAgo);
    }

    // Step 3: Perform atomized write mutation to your PostgreSQL Vehicle table row
    const updatedVehicle = await prisma.vehicle.update({
      where: { id: targetTicket.vehicleId },
      data: telemetryUpdates
    });

    res.status(200).json({
      success: true,
      message: "Telemetry streams saved securely to disk array.",
      vehicle: updatedVehicle
    });
  } catch (error) {
    console.error("Data mutation fault committing telemetry arrays:", error);
    res.status(500).json({ success: false, message: "Database update transaction crash." });
  }
}

export async function getVehicleWorkspace(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const rawId = req.params.vehicleId;

    if (!rawId) {
      res.status(400).json({
        success: false,
        message: "Vehicle ID is required."
      });
      return;
    }

    const vehicleId = parseInt(String(rawId), 10);

    if (isNaN(vehicleId)) {
      res.status(400).json({
        success: false,
        message: "Invalid Vehicle ID."
      });
      return;
    }

    const vehicle = await prisma.vehicle.findUnique({
      where: {
        id: vehicleId
      },
      include: {
        customer: true,
        tickets: {
          include: {
            technician: true,
            invoice: true,
            parts: {
              include: {
                inventoryItem: true
              }
            },
            timeline: true
          },
          orderBy: {
            createdAt: "desc"
          }
        }
      }
    });

    if (!vehicle) {
      res.status(404).json({
        success: false,
        message: "Vehicle not found."
      });
      return;
    }

    const totalRepairs = vehicle.tickets.length;

    const totalRevenue = vehicle.tickets.reduce(
      (sum, ticket) => sum + (ticket.invoice?.grandTotal || 0),
      0
    );

    const totalPartsConsumed = vehicle.tickets.reduce(
      (sum, ticket) =>
        sum +
        ticket.parts.reduce(
          (partSum, part) => partSum + part.quantity,
          0
        ),
      0
    );

    const averageRepairCost =
      totalRepairs > 0
        ? Number((totalRevenue / totalRepairs).toFixed(2))
        : 0;

    const activeIssues = vehicle.tickets.filter(
      (ticket) =>
        ticket.status !== TicketStatus.RESOLVED &&
        ticket.status !== TicketStatus.DELIVERED
    ).length;

const lastRepairDate = vehicle.tickets.at(0)?.createdAt ?? null;

const activeTicket =
  vehicle.tickets.find(
    ticket =>
      ticket.status !== TicketStatus.RESOLVED &&
      ticket.status !== TicketStatus.DELIVERED
  ) ?? null;

const timeline = vehicle.tickets
  .flatMap(ticket =>
    ticket.timeline.map(event => ({
      id: event.id,
      status: event.status,
      createdAt: event.createdAt,
      ticketId: ticket.id
    }))
  )
  .sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  );

  const lastServiceDaysAgo = vehicle.lastServiceDate
  ? Math.floor(
      (Date.now() -
        new Date(vehicle.lastServiceDate).getTime()) /
        (1000 * 60 * 60 * 24)
    )
  : null;
  


    res.status(200).json({
      success: true,
      vehicle,
      activeTicket,
      timeline,
      statistics: {
        totalRepairs,
        totalRevenue,
        totalPartsConsumed,
        averageRepairCost
      },
      healthSummary: {
        healthScore: vehicle.healthScore,
        lastRepairDate,
        lastServiceDate:vehicle.lastServiceDate,
        lastServiceDaysAgo,
        activeIssues
      }
    });
  } catch (error) {
    console.error("Vehicle workspace fetch error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to load vehicle workspace."
    });
  }
}

export async function updateVehicleWorkspace(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const vehicleId = parseInt(String(req.params.vehicleId), 10);

    if (isNaN(vehicleId)) {
      res.status(400).json({
        success: false,
        message: "Invalid vehicle ID."
      });
      return;
    }

    const {
      batteryPackSerial,
      batteryCapacity,
      batterySoh,
      batteryCycles,
      batteryTemp,
      odometer,
      lastServiceDaysAgo,
      lastServiceDate,
      manufacturer,
      modelYear,
      healthScore,

      motorSerial,
      motorType,
      motorNotes,

      controllerSerial,
      controllerVersion,
      controllerNotes
    } = req.body;

    const updatedVehicle = await prisma.vehicle.update({
      where: {
        id: vehicleId
      },
      data: {
        batteryPackSerial,
        batteryCapacity,
        batterySoh,
        batteryCycles,
        batteryTemp,
        odometer,
        lastServiceDaysAgo,
        lastServiceDate,
        manufacturer,
        modelYear,
        healthScore,

        motorSerial,
        motorType,
        motorNotes,

        controllerSerial,
        controllerVersion,
        controllerNotes
      }
    });

    


    res.status(200).json({
      success: true,
      vehicle: updatedVehicle
    });
  } catch (error) {
    console.error("Vehicle workspace update error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update vehicle."
    });
  }
}