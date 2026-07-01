import { prisma } from '../config/prisma.js';
import { type Request, type Response } from 'express';
import { TicketPriority , TicketStatus } from '../generated/client/index.js';

interface UpdateTicketStatusBody {
  status: 'PENDING' | 'DIAGNOSING' | 'RESOLVED';
  technicianNotes?: string;
}

// Explicit structure tracking inputs to enforce compile safety
interface CreateTicketInputBody {
  customerId?: string;
  name?: string;
  phone?: string;
  vehicleModel?: string;
  email?: string;
  address?: string;
  issueCategory: string;
  description: string;
  technicianId?: string;
  vin?:string;
  priority?:TicketPriority;
  bay?:string;
}

export const createTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    // 📥 1. Unpack ALL input variables arriving from our unified client form layout
    const shopId = (req as any).user?.shopId
    if (!shopId) throw new Error("TRANS_NO_SHOP");
    const { 
      customerId, 
      name, phone, vehicleModel, email, address, 
      issueCategory, description, 
      vin, priority,
      technicianId // Capture our optional mechanic relationship token
    } = req.body as CreateTicketInputBody;

    // 🛡️ 2. Absolute Mandatory Checks
    if (!issueCategory || !description) {
      res.status(400).json({ error: "Missing core ticket tracking parameters (issueCategory or description notes)." });
      return;
    }

    // 🔧 3. NEW RELATION GATE: Pre-flight Verification Lookup for Assigned Mechanics
    if (technicianId) {
      const existingTechnician = await prisma.technician.findUnique({
        where: { id: technicianId }
      });

      if (!existingTechnician) {
        res.status(404).json({ error: "The provided technician assignment identifier does not exist inside our database files." });
        return;
      }
    }

    // ⚡ 4. ATOMIC DATABASE TRANSACTION ENGINE
    // We wrap our customer, vehicle, and ticket writes together. If any phase crashes, the database safely rolls back.
    const finalTicket = await prisma.$transaction(async (tx) => {
      let finalCustomerId: string;
      let customerPhoneForVin = phone;

      // 🔍 PHASE A: RESOLVE CUSTOMER IDENTITY
      if (customerId) {
        // TRACK A: MAP OPERATION TO AN EXISTING CUSTOMER LEAF RECORD
        const existingCustomer = await tx.customer.findUnique({
          where: { id: customerId }
        });

        if (!existingCustomer) {
          throw new Error("TRANS_CUSTOMER_NOT_FOUND");
        }

        finalCustomerId = customerId;
        customerPhoneForVin = existingCustomer.phone; // Pull original phone identifier to back up our fallback VIN matrix
      } else {
        // TRACK B: DYNAMICALLY REGISTER WALK-IN PROFILE INLINE UNIFIED INTAKE
        if (!name || !phone ) {
          throw new Error("TRANS_MISSING_WALK_IN_FIELDS");
        }

        const newCustomer = await tx.customer.create({
          data: {
            name,
            phone,
            email: email || null,
            address: address || null,
            shopId
          }
        });

        finalCustomerId = newCustomer.id;
      }

      // 🚗 PHASE B: DYNAMIC VEHICLE LIFECYCLE LINK (The Optional VIN Fallback Logic!)
      const targetModel = vehicleModel ?? "Unknown EV";      
      // Generate an airtight unique registration placeholder if the user leaves the VIN input box empty
      const sliceKey = customerPhoneForVin ? customerPhoneForVin.slice(-5) : finalCustomerId.slice(-5);
      const resolvedVin = vin && vin.trim() !== "" 
        ? vin.toUpperCase().trim()
        : `VOLT-REG-${sliceKey}-${Math.floor(Date.now() / 1000)}`;

      // Find the existing vehicle tracker record by unique VIN index, or instantiate it if it's the vehicle's first visit
      const targetVehicle = await tx.vehicle.upsert({
        where: { vin: resolvedVin,shopId },
        update: {}, // If vehicle exists, keep its historical floor telemetry completely untouched
        create: {
          vin: resolvedVin,
          vehicleModel: targetModel,
          customerId: finalCustomerId,
          shopId
        }
      });

      // 🏗️ PHASE C: MANIFEST SPECIFIC SERVICE REPAIR TICKET
      // Connects cleanly to both the resolved customer AND the validated vehicle id anchor!
      const newTicket = await tx.repairTicket.create({
        data: {
          issueCategory,
          description,
          priority: priority ?? TicketPriority.STANDARD,    
          customerId: finalCustomerId,
          vehicleId: targetVehicle.id, // ⚡ Fully linked! No more orphan arrays on the vehicle dashboard page
          technicianId: technicianId || null,
          shopId
        }
      });

      

      // Initialize the tracking logging timeline
      await tx.timelineEvent.create({
        data: {
          ticketId: newTicket.id,
          status: TicketStatus.PENDING
        }
      });

      return newTicket;
    });

    // 📤 5. Dispatch clean standardized response payload envelope
    res.status(201).json({
      success: true,
      message: "Unified service queue workspace entry deployed successfully across data ecosystems.",
      ticket: finalTicket
    });

  } catch (err: unknown) {
    // 🛡️ Catch transaction thrown strings and transform them into semantic REST status errors
    
    if (err instanceof Error) {
      if (err.message === "TRANS_CUSTOMER_NOT_FOUND") {
        res.status(404).json({ error: "Provided customer identity tracking badge not found inside database files." });
        return;
      }
      if (err.message === "TRANS_MISSING_WALK_IN_FIELDS") {
        res.status(400).json({ error: "Missing walk-in customer parameters. Provide name, phone, and vehicleModel to register profile inline first." });
        return;
      }
      if (err.message === "TRANS_NO_SHOP") {
  res.status(403).json({ error: "Shop not found." });
  return;
}
    }

    // ✅ STRICT LINTER SHIELD: Guarding unknown catch instances to prevent environment compiler warnings
    const errorInstance = err instanceof Error ? err : new Error(String(err));
    console.error("💥 Unified Ticket Controller Failure:", errorInstance);
    res.status(500).json({ error: "Internal operational thread failed to complete database ledger commit operations." });
  }
};





export const deleteTicket = async (req:Request,res:Response)=>{
try {
    const {id } = req.params
    const ticketId = Number(id);

 if (!id || isNaN(ticketId)) {
      return res.status(400).json({ 
        error: "Invalid request parameters. Please select a valid ticket." 
      });
    }

  await prisma.repairTicket.delete({
    where:{
      id:ticketId
    }
  })
  return res.status(200).json({ 
      message: "Ticket deleted successfully." 
    });

  return res.status(200).json({ message: "Ticket deleted successfully." });
} catch (error) {
 return res.status(404).json({ 
      error: "Ticket not found or already deleted from the ledger." 
    });
}
}


