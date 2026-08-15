import { prisma } from "../../config/prisma.js";
import type { RepairContext } from "../types/repair-context.js";

export class RepairContextService {
  async buildContext(
    ticketId: number,
    shopId: string
  ): Promise<RepairContext> {
    const ticket = await prisma.repairTicket.findFirst({
      where: {
        id: ticketId,
        shopId,
      },
      include: {
        customer: true,
        vehicle: true,
        technician: true,
        notes: {
          orderBy: {
            createdAt: "asc",
          },
        },
        timeline: {
          orderBy: {
            createdAt: "asc",
          },
        },
        parts: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    if (!ticket) {
      throw new Error("REPAIR_TICKET_NOT_FOUND");
    }

    return {
      repair: {
        id: ticket.id,
        issueCategory: ticket.issueCategory,
        description: ticket.description,
        status: ticket.status,
        priority: ticket.priority,
        manufacturer: ticket.manufacturer,
      },

      customer: {
        name: ticket.customer.name,
        phone: ticket.customer.phone,
      },

      vehicle: {
        vin: ticket.vehicle?.vin ?? "",
        vehicleModel: ticket.vehicle?.vehicleModel ?? "",
        manufacturer: ticket.vehicle?.manufacturer ?? null,
        modelYear: ticket.vehicle?.modelYear ?? null,

        battery: {
          packSerial: ticket.vehicle?.batteryPackSerial ?? null,
          capacity: ticket.vehicle?.batteryCapacity ?? null,
          soh: ticket.vehicle?.batterySoh ?? null,
          cycles: ticket.vehicle?.batteryCycles ?? null,
          temperature: ticket.vehicle?.batteryTemp ?? null,
        },

        motor: {
          serial: ticket.vehicle?.motorSerial ?? null,
          type: ticket.vehicle?.motorType ?? null,
          notes: ticket.vehicle?.motorNotes ?? null,
        },

        controller: {
          serial: ticket.vehicle?.controllerSerial ?? null,
          version: ticket.vehicle?.controllerVersion ?? null,
          notes: ticket.vehicle?.controllerNotes ?? null,
        },

        healthScore: ticket.vehicle?.healthScore ?? null,
      },

      technician: ticket.technician
        ? {
            name: ticket.technician.fullName,
            specialization: ticket.technician.specialization,
            experienceYears: ticket.technician.experienceYears,
          }
        : null,

      notes: ticket.notes.map((note) => ({
        structuredText: note.structuredText,
        quickTags: note.quickTags,
        createdAt: note.createdAt.toISOString(),
      })),

      timeline: ticket.timeline.map((event) => ({
        status: event.status,
        createdAt: event.createdAt.toISOString(),
      })),

      parts: ticket.parts.map((part) => ({
        quantity: part.quantity,
        lockedCost: part.lockedCost,
      })),
    };
  }
}