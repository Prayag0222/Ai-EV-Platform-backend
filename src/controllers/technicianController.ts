import { type Request, type Response } from 'express';
import { prisma } from '../config/prisma.js';
import bcrypt from 'bcryptjs'; // ⚡ Ensure bcrypt is imported at the top of this file!
import { Role } from '../generated/client/client.js';
import { TechnicianSpecialization ,TicketStatus } from '../generated/client/client.js';
interface CreateTechnicianInput {
  fullName: string;
  email: string;
  phone: string;
  specialization: TechnicianSpecialization;
  experienceYears:  number;
  address?: string;
  profileImage?: string;
}

// ==========================================
// 1. REGISTER A NEW TECHNICIAN (POST)
// ==========================================
export const createTechnician = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { 
      fullName, 
      email, 
      phone, 
      specialization, 
      experienceYears, 
      address, 
      profileImage 
    } = req.body as CreateTechnicianInput;

    // ✅ Validate Specialization Enum
if (
  !Object.values(TechnicianSpecialization).includes(
    specialization as TechnicianSpecialization
  )
) {
  return res.status(400).json({
    message: "Invalid technician specialization."
  });
}

    // 🛡️ Guard 1: Ensure all mandatory parameters are present
    if (!fullName || !email || !phone || !specialization || experienceYears === undefined || experienceYears === null) {
      return res.status(400).json({ message: 'Missing required technician account fields.' });
    }

    // 🛡️ Guard 2: Enforce strict human experience boundaries (Max 60 Years)
    const parsedExperience = Number(experienceYears);
    if (isNaN(parsedExperience) || parsedExperience < 0 || parsedExperience > 60) {
      return res.status(400).json({ 
        message: 'Validation Failure: Experience must be a realistic number between 0 and 60 years.' 
      });
    }
    const normalizedEmail = email.toLowerCase().trim();
    // 🛡️ Guard 3: Double Check BOTH tables to prevent unique email constraint crashes
    const emailInUserTable = await prisma.user.findUnique({ where: { email: normalizedEmail } });
    const emailInTechTable = await prisma.technician.findFirst({ where: { email: normalizedEmail } });

    if (emailInUserTable || emailInTechTable) {
      return res.status(400).json({ message: 'A user or technician account with this email already exists.' });
    }

    // Auto-Generate Unique Employee ID Tracking Code
    const uniqueSuffix = Math.floor(1000 + Math.random() * 9000);
    const autoEmployeeId = `TECH-2026-${uniqueSuffix}`;

// 🔒 SECURITY ADDITION: Auto-generate a secure temporary password using your suffix!
    // Example output: VoltOps@4829
    const temporaryPassword = `VoltOpsWelcome`;
    const saltRounds = 10;
    const hashedUserPassword = await bcrypt.hash(temporaryPassword, saltRounds);

    // 👥 SYSTEM PIPELINE STEP 1: Create the login account inside the master USER table
    const [createdLoginAccount, newTechnicianProfile] = await prisma.$transaction([
      prisma.user.create({
        data: {
          name: fullName,
          email: normalizedEmail,
          password: hashedUserPassword,
          role: Role.TECHNICIAN // Hardcoded: Ensures your login controller catches this role and routes perfectly!
        }
      }),

      // 🔧 SYSTEM PIPELINE STEP 2: Create the workspace metadata inside your TECHNICIAN table
      prisma.technician.create({
        data: {
          fullName,
          email: normalizedEmail,
          phone,
          employeeId: autoEmployeeId,
          specialization,
         experienceYears: parseInt(experienceYears as unknown as string, 10),
          address: address || null,
          profileImage: profileImage || null
          // NOTE: If your technician schema has a relation field linking to User, 
          // you can cleanly add: userId: createdLoginAccount.id right here!
        }
      })
    ]);

    return res.status(201).json({
      success: true,
      message: 'Technician registered successfully with automated corporate ID tracking!',
      temporaryPassword: temporaryPassword,
      technician: newTechnicianProfile,
      loginUser: createdLoginAccount
    });
  } catch (err: unknown) {
    const errorInstance = err instanceof Error ? err : new Error(String(err));
    console.error('Create Technician Error:', errorInstance);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

// ==========================================
// 2. FETCH ALL TECHNICIANS (GET)
// ==========================================
export const getAllTechnicians = async (req: Request, res: Response): Promise<Response> => {
  try {
    const technicians = await prisma.technician.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return res.status(200).json(technicians);
  } catch (err: unknown) {
    const errorInstance = err instanceof Error ? err : new Error(String(err));
    console.error('Get All Technicians Error:', errorInstance);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

// ==========================================
// 3. MODIFY EXISTING TECHNICIAN RECORD (PUT)
// ==========================================
export const updateTechnician = async (req: Request, res: Response): Promise<Response> => {
  try {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam;

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ message: 'A valid technician ID parameter is required.' });
    }

    const updates = req.body;

    // 🛡️ Guard 3: Intercept update requests to check experience parameters
    if (updates.experienceYears !== undefined && updates.experienceYears !== null) {
      const parsedUpdateExperience = Number(updates.experienceYears);
      if (isNaN(parsedUpdateExperience) || parsedUpdateExperience < 0 || parsedUpdateExperience > 60) {
        return res.status(400).json({ 
          message: 'Validation Failure: Experience modifications must stay between 0 and 60 years.' 
        });
      }
      updates.experienceYears = String(parsedUpdateExperience); // Force string normalization
    }

    if (typeof updates.email === 'string') {
      updates.email = updates.email.toLowerCase().trim();
    }

    const updatedTechnician = await prisma.technician.update({
      where: { id },
      data: updates
    });

    return res.status(200).json({
      message: 'Technician record updated successfully.',
      technician: updatedTechnician
    });
  } catch (err: unknown) {
    const errorInstance = err instanceof Error ? err : new Error(String(err));
    console.error('Update Technician Error:', errorInstance);
    return res.status(500).json({ message: 'Failed to modify technician record.' });
  }
};

// ==========================================
// 4. PURGE TECHNICIAN DELETION LINK (DELETE)
// ==========================================
export const deleteTechnician = async (req: Request, res: Response): Promise<Response> => {
  try {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam;

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ message: 'A valid technician ID parameter is required.' });
    }

    const existingTechnician = await prisma.technician.findUnique({
      where: { id }
    });

    if (!existingTechnician) {
      return res.status(404).json({ message: 'Technician profile not found or already deleted.' });
    }

    await prisma.technician.delete({
      where: { id }
    });

    return res.status(200).json({ message: 'Technician permanently removed.' });
  } catch (err: unknown) {
    const errorInstance = err instanceof Error ? err : new Error(String(err));
    console.error('Delete Technician Error:', errorInstance);
    return res.status(500).json({ message: 'Failed to purge technician data.' });
  }
};



export const getMobileWorkspaceTicket = async (req: Request, res: Response): Promise<any> => {
  try {
    // 1. 🛡️ STRICT TYPE GUARD: Safely extract the ID from the URL
    const idParam = req.params.id;

    // Reject if it's missing, undefined, or an array
    if (!idParam || typeof idParam !== 'string') {
      return res.status(400).json({ success: false, message: "Invalid or missing ticket ID." });
    }

    const ticketId = parseInt(idParam, 10);

    if (isNaN(ticketId)) {
      return res.status(400).json({ success: false, message: "Ticket ID must be a valid number." });
    }

    // ⚡ 2. THE MASTER QUERY: Fetch the ticket and ALL nested mobile data in one shot!
    const ticket = await prisma.repairTicket.findUnique({
      where: { id: ticketId },
      include: {
        customer: {
          select: { name: true, phone: true }
        },
        technician:{
          select:{fullName:true}
        },  
        vehicle:true,

        timeline: {
          orderBy: { createdAt: 'desc' } 
        },
        notes: {
          orderBy: { createdAt: 'desc' } 
        },
        parts: {
          include: {
            inventoryItem: {
              select: { partName: true, sku: true, retailPrice: true }
            }
          }
        }
      }
    });

    if (!ticket) {
      return res.status(404).json({ success: false, message: "Repair ticket not found." });
    }

    // 3. Send the massive, perfectly structured payload back to the mobile app
    return res.status(200).json({ success: true, ticket });

  } catch (error) {
    console.error("Error fetching mobile workspace data:", error);
    return res.status(500).json({ success: false, message: "Internal server crash." });
  }}


  // 📱 PATCH: /api/technician/workspace/:id/status
export const updateMobileTicketStatus = async (req: Request, res: Response): Promise<any> => {
  try {
    const idParam = req.params.id;
    const { newStatus } = req.body; // e.g., "IN_SERVICE", "RESOLVED"
    // ✅ Validate Ticket Status Enum
if (
  !Object.values(TicketStatus).includes(
    newStatus as TicketStatus
  )
) {
  return res.status(400).json({
    success: false,
    message: "Invalid ticket status."
  });
}
const validatedStatus = newStatus as TicketStatus;

    // 1. Strict Validation
    if (!idParam || typeof idParam !== 'string') {
      return res.status(400).json({ success: false, message: "Invalid ticket ID." });
    }
    
    if (!newStatus || typeof newStatus !== 'string') {
      return res.status(400).json({ success: false, message: "Missing newStatus in request body." });
    }

    const ticketId = parseInt(idParam, 10);
    if (isNaN(ticketId)) {
      return res.status(400).json({ success: false, message: "Ticket ID must be a number." });
    }

   const existingTicket = await prisma.repairTicket.findUnique({
  where: { id: ticketId },
  select: {
    closedAt: true,
    vehicleId: true
  }
});
    if (!existingTicket) {
      return res.status(404).json({ success: false, message: "Repair ticket not found." });
    }

    const isCompleted = validatedStatus === TicketStatus.RESOLVED || validatedStatus === TicketStatus.DELIVERED;
    const completionTimestamp = isCompleted ? (existingTicket.closedAt ?? new Date()) : null;

    // ⚡ 2. THE PRISMA TRANSACTION (Atomic Operation)
    // Both of these database calls run together safely!
    const [updatedTicket, newTimelineEvent] = await prisma.$transaction([
      
      // Action A: Update the main ticket status
      prisma.repairTicket.update({
        where: { id: ticketId },
        data: { 
          status: validatedStatus,
          updatedAt: new Date(),
          closedAt: completionTimestamp
        }
      }),

      // Action B: Create the historical timeline log
      prisma.timelineEvent.create({
        data: {
          ticketId: ticketId,
          status: validatedStatus
          // createdAt is handled automatically by the database default(now())
        }
      })

    ]);
    if (
  validatedStatus === TicketStatus.DELIVERED &&
  existingTicket?.vehicleId
) {
  await prisma.vehicle.update({
    where: {
      id: existingTicket.vehicleId
    },
    data: {
      lastServiceDate: new Date()
    }
  });
}

    // 3. Return the newly created timeline event so the mobile UI can instantly draw it on screen
    return res.status(200).json({ 
      success: true, 
      message: `Ticket upgraded to ${newStatus}`,
      ticket: updatedTicket,
      timelineEvent: newTimelineEvent 
    });
    

  } catch (error) {
    console.error("Error updating mobile ticket status:", error);
    return res.status(500).json({ success: false, message: "Server crash during status update." });
  }
};




// 📱 POST: /api/technician/workspace/:id/notes
export const addMobileTicketNote = async (req: Request, res: Response): Promise<any> => {
  try {
    const idParam = req.params.id;
    const { rawVoiceText, structuredText, quickTags, imageUrls } = req.body;

    // 1. Strict Validation
    if (!idParam || typeof idParam !== 'string') {
      return res.status(400).json({ success: false, message: "Invalid ticket ID." });
    }
    
    // The only thing we STRICTLY require is the final structured text.
    if (!structuredText || typeof structuredText !== 'string') {
      return res.status(400).json({ success: false, message: "Missing structured note text." });
    }

    const ticketId = parseInt(idParam, 10);
    if (isNaN(ticketId)) {
      return res.status(400).json({ success: false, message: "Ticket ID must be a number." });
    }

    // ⚡ 2. Save the Note directly to the new Database Table
    const newNote = await prisma.technicianNote.create({
      data: {
        ticketId: ticketId,
        rawVoiceText: rawVoiceText || null, // Optional: What they actually said
        structuredText: structuredText,     // Required: What the AI cleaned up
        quickTags: quickTags || [],         // Optional: e.g., ["BMS", "Fuse"]
        imageUrls: imageUrls || []          // Optional: e.g., ["https://..."]
      }
    });

    // 3. Return success
    return res.status(201).json({ 
      success: true, 
      message: "Note logged successfully.",
      note: newNote 
    });

  } catch (error) {
    console.error("Error saving mobile technician note:", error);
    return res.status(500).json({ success: false, message: "Server crash while saving note." });
  }
};



// 📱 POST: /api/technician/workspace/:id/parts
export const addUsedPartToTicket = async (req: Request, res: Response): Promise<any> => {
  try {
    const idParam = req.params.id;
    const { inventoryId, quantity = 1 } = req.body;

    if (!idParam || typeof idParam !== 'string') {
      return res.status(400).json({ success: false, message: "Invalid ticket ID." });
    }
    
    const ticketId = parseInt(idParam, 10);
    
    const safeQuantity = Number(quantity);
    if (isNaN(ticketId) || !inventoryId || !Number.isInteger(safeQuantity) || safeQuantity < 1) {
      return res.status(400).json({ success: false, message: "Missing required fields." });
    }

    // 1. Fetch the current price from the Owner's inventory
    const inventoryItem = await prisma.inventory.findUnique({
      where: { id: inventoryId }
    });

    if (!inventoryItem) {
      return res.status(404).json({ success: false, message: "Part not found in inventory." });
    }

    if (inventoryItem.stockLevel < safeQuantity) {
        return res.status(400).json({ success: false, message: "Not enough stock available!"});
    }

    // ⚡ 2. THE TRANSACTION
    const [newUsedPart] = await prisma.$transaction([
      
      // Action A: Log the part to the ticket, locking in the price
      prisma.usedPart.create({
        data: {
          ticketId: ticketId,
          inventoryId: inventoryId,
          quantity: safeQuantity,
          lockedCost: inventoryItem.retailPrice // Lock the price!
        },
        include: { inventoryItem: { select: { partName: true, sku: true, retailPrice: true } } }
      }),

      // Action B: Subtract the quantity safely using atomic decrement
      prisma.inventory.update({
        where: { id: inventoryId },
        data: {
          stockLevel: {
            decrement: safeQuantity
          }
        }
      }),
      prisma.timelineEvent.create({
        data: { ticketId, status: `PART_ADDED:${inventoryItem.partName}:x${safeQuantity}` }
      })
      
    ]);

    return res.status(201).json({ 
      success: true, 
      message: "Part added to ticket and inventory deducted.",
      part: newUsedPart 
    });

  } catch (error) {
    console.error("Error logging used part:", error);
    return res.status(500).json({ success: false, message: "Server crash." });
  }
};

export const removeUsedPartFromTicket = async (req: Request, res: Response): Promise<any> => {
  const ticketId = Number(req.params.id);
  const partId = Number(req.params.partId);
  if (!Number.isInteger(ticketId) || !Number.isInteger(partId)) {
    return res.status(400).json({ success: false, message: "Invalid ticket or part ID." });
  }
  try {
    const usedPart = await prisma.usedPart.findFirst({
      where: { id: partId, ticketId },
      include: { inventoryItem: { select: { partName: true } } }
    });
    if (!usedPart) return res.status(404).json({ success: false, message: "Allocated part not found." });

    await prisma.$transaction([
      prisma.usedPart.delete({ where: { id: partId } }),
      prisma.inventory.update({
        where: { id: usedPart.inventoryId },
        data: { stockLevel: { increment: usedPart.quantity } }
      }),
      prisma.timelineEvent.create({
        data: { ticketId, status: `PART_REMOVED:${usedPart.inventoryItem.partName}:x${usedPart.quantity}` }
      })
    ]);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error removing used part:", error);
    return res.status(500).json({ success: false, message: "Part removal failed." });
  }
};


// manual notes with ai integration




export const createManualNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const { ticketId } = req.params;
    const { text } = req.body;

    if (!ticketId || !text) {
      res.status(400).json({ success: false, error: 'Ticket ID and text are required.' });
      return;
    }

    const parsedTicketId = parseInt(String(ticketId), 10);
    console.log(`🤖 Passing manual text to Llama-3.3-70b-versatile for structuring...`);

    let polishedEnglishText = text;
    let computedTags: string[] = ['Manual-Entry'];

    const systemPrompt = `You are an expert EV diagnostic assistant.
Your task is to take a raw manual text note typed by a workshop mechanic and translate/format it into a structured JSON object.

CRITICAL RULES:
1. Translate and polish the core diagnostic meaning into clean, professional engineering English.
2. Extract relevant component quick-tags if explicitly or implicitly mentioned.

Reply ONLY with a valid JSON object using these exact keys:
{
  "structuredText": "Clean technical diagnostic summary sentence.",
  "quickTags": ["TAG1", "TAG2"]
}`;

    const groqChatResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: text }
        ],
        temperature: 0.1,
        response_format: { type: "json_object" }
      }),
    });

    if (groqChatResponse.ok) {
      const chatResult = await groqChatResponse.json();
      const rawJsonContent = chatResult?.choices?.[0]?.message?.content;
      
      if (rawJsonContent) {
        try {
          const parsedAiResult = JSON.parse(rawJsonContent);
          polishedEnglishText = parsedAiResult.structuredText || text;
          computedTags = parsedAiResult.quickTags || ['Manual-Entry'];
        } catch (parseErr) {
          console.error('Failed parsing AI JSON response, defaulting to raw text.', parseErr);
        }
      }
    }

    const newNote = await prisma.technicianNote.create({
      data: {
        ticketId: parsedTicketId,
        rawVoiceText: text, // Preserving original typed input
        structuredText: polishedEnglishText,
        quickTags: computedTags,
      },
    });

    res.status(201).json({ success: true, note: newNote });
  } catch (error: unknown) {
    console.error('❌ Create Note Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ success: false, error: errorMessage });
  }
};

// --- 2. UPDATE EXISTING NOTE ---
export const updateNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const { noteId } = req.params;
    const { structuredText } = req.body;

    if (!noteId || !structuredText) {
      res.status(400).json({ success: false, error: 'Note ID and new text are required.' });
      return;
    }

    const updatedNote = await prisma.technicianNote.update({
      where: { id: parseInt(String(noteId), 10) },
      data: { structuredText },
    });

    res.status(200).json({ success: true, note: updatedNote });
  } catch (error: unknown) {
    console.error('❌ Update Note Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ success: false, error: errorMessage });
  }
};

// --- 3. DELETE NOTE ---
export const deleteNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const { noteId } = req.params;

    if (!noteId) {
      res.status(400).json({ success: false, error: 'Note ID is required.' });
      return;
    }

    await prisma.technicianNote.delete({
      where: { id: parseInt(String(noteId), 10) },
    });

    res.status(200).json({ success: true, message: 'Note deleted successfully.' });
  } catch (error: unknown) {
    console.error('❌ Delete Note Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ success: false, error: errorMessage });
  }
};

export const updateRepairCosts = async (req: Request, res: Response): Promise<any> => {
  const ticketId = Number(req.params.id);
  if (!Number.isInteger(ticketId)) {
    return res.status(400).json({ success: false, message: 'Invalid ticket ID.' });
  }

  const estimatedCost = Number(req.body.estimatedCost ?? 0);
  const laborHours = Number(req.body.laborHours ?? 0);
  const laborRate = Number(req.body.laborRate ?? 0);
  const taxRate = Number(req.body.taxRate ?? 0);
  const discount = Number(req.body.discount ?? 0);
  const values = [estimatedCost, laborHours, laborRate, taxRate, discount];

  if (values.some((value) => !Number.isFinite(value) || value < 0) || taxRate > 100) {
    return res.status(400).json({ success: false, message: 'Costs must be non-negative numbers and tax cannot exceed 100%.' });
  }

  try {
    const ticket = await prisma.repairTicket.findUnique({
      where: { id: ticketId },
      select: { parts: { select: { quantity: true, lockedCost: true } } }
    });
    if (!ticket) return res.status(404).json({ success: false, message: 'Repair ticket not found.' });

    const partsTotal = ticket.parts.reduce((sum, part) => sum + part.quantity * part.lockedCost, 0);
    const laborTotal = laborHours * laborRate;
    const subtotal = partsTotal + laborTotal;
    const taxAmount = subtotal * (taxRate / 100);
    const grossTotal = subtotal + taxAmount;

    if (discount > grossTotal) {
      return res.status(400).json({ success: false, message: 'Discount cannot exceed the repair total.' });
    }

    const grandTotal = grossTotal - discount;
    const updatedTicket = await prisma.repairTicket.update({
      where: { id: ticketId },
      data: { estimatedCost, laborHours, laborRate, taxRate, discount, finalCost: grandTotal }
    });

    return res.status(200).json({
      success: true,
      ticket: updatedTicket,
      totals: { partsTotal, laborTotal, subtotal, taxAmount, discount, grandTotal }
    });
  } catch (error) {
    console.error('Error updating repair costs:', error);
    return res.status(500).json({ success: false, message: 'Repair costs could not be saved.' });
  }
};
