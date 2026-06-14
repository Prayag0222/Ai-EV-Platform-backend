import { prisma } from '../config/prisma.js';
import { type Request, type Response } from 'express';

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
  technicianNotes?: string;
  technicianId?: string; // 🔌 NEW LINK PARAMETER KEY
}

export const createTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    // 📥 1. Unpack ALL input variables arriving from our unified client form layout
    const { 
      customerId, 
      name, phone, vehicleModel, email, address, 
      issueCategory, description, technicianNotes,
      technicianId // Capture our optional mechanic relationship token
    } = req.body as CreateTicketInputBody;

    // 🛡️ 2. Absolute Mandatory Checks (✅ BUG FIXED: customerId removed from hard global constraint!)
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

    // 🔩 4. Setup our target holder pointer to capture the definitive customer primary key badge string
    let finalCustomerId: string;

    if (customerId) {
      // 🔍 TRACK A: MAP OPERATION TO AN EXISTING CUSTOMER LEAF RECORD
      const existingCustomer = await prisma.customer.findUnique({
        where: { id: customerId }
      });

      if (!existingCustomer) {
        res.status(404).json({ error: "Provided customer identity tracking badge not found inside database files." });
        return;
      }

      finalCustomerId = customerId;

    } else {
      // 🆕 TRACK B: DYNAMICALLY REGISTER WALK-IN PROFILE INLINE UNIFIED INTAKE
      if (!name || !phone || !vehicleModel) {
        res.status(400).json({ 
          error: "Missing walk-in customer parameters. Provide name, phone, and vehicleModel to register profile inline first." 
        });
        return;
      }

      // Action: Commit the new customer profile row down into the lowercase customer table
      const newCustomer = await prisma.customer.create({
        data: {
          name,
          phone,
          vehicleModel,
          email: email || null,
          address: address || null
        }
      });

      finalCustomerId = newCustomer.id;
    }

    // 🏗️ 5. CREATE THE REPAIR TICKET (Both customer and technician links are verified and ready!)
    const newTicket = await prisma.repairTicket.create({
      data: {
        issueCategory,
        description,
        technicianNotes: technicianNotes || null,
        customerId: finalCustomerId, // Connects smoothly to our customer model tracking key socket slot
        technicianId: technicianId || null // 🔌 Connects cleanly to our optional technician table column layout slot
      }
    });

    // 📤 6. Dispatch clean standardized response payload envelope
    res.status(201).json({
      success: true,
      message: "Unified service queue workspace entry deployed successfully across data ecosystems.",
      ticket: newTicket
    });

  } catch (err: unknown) {
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
  console.log("Error in deleting Ticket ", error )
 return res.status(404).json({ 
      error: "Ticket not found or already deleted from the ledger." 
    });
}
}