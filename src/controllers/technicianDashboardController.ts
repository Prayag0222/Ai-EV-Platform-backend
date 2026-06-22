import { type Request, type Response } from 'express';
import { prisma } from '../config/prisma.js'; // Reusing your central connection pipeline
import { TicketStatus } from '../generated/client/client.js';


export const getAssignedTickets = async (req:Request,res:Response): Promise<any>=>{
    try {
        const {technicianId} = req.query

     

        if(!technicianId || typeof technicianId !== "string"){
            return res.status(500).json({error:"Technician Id parameter required to load worspace "})
        };

        const activeJobs = await prisma.repairTicket.findMany({
            where:{
                technicianId: technicianId
            },
            include:{
                customer: {
                  select: { name: true, phone: true }
                },
                vehicle: {
                  select: { vehicleModel: true, vin: true }
                },
                technician: {
                  select: { id: true, fullName: true, employeeId: true }
                }
            },
            orderBy:{
                id:"desc"
            }
        })
        return res.status(200).json({
      success: true,
      tickets: activeJobs
    });

    } catch (err:unknown) {
        const errorInstance = err instanceof Error ? err.message : 'Database error';
    console.error("Error fetching technician tickets:", errorInstance);
    return res.status(500).json({ error: "Internal server error." });
    }
}


export const updateTicketProgress = async (req:Request,res:Response): Promise<any>=>{
    try {
        const {id } =req.params;

        const {status , technicianNotes} = req.body;

        const ticketIdNumber = Number(id)
           if(!Object.values(TicketStatus).includes(status as TicketStatus)){
            return res.status(400).json({message:'status is not valid'})
           }

        if(isNaN(ticketIdNumber)){
      return res.status(400).json({ error: "Invalid ticket tracking identifier." });
    }

    const existingTicket = await prisma.repairTicket.findUnique({
      where: { id: ticketIdNumber },
      select: { closedAt: true }
    });
    if (!existingTicket) {
      return res.status(404).json({ error: "Repair ticket not found." });
    }

    const validatedStatus = status as TicketStatus;
    const isCompleted = validatedStatus === TicketStatus.RESOLVED || validatedStatus === TicketStatus.DELIVERED;
    const completionTimestamp = isCompleted ? (existingTicket.closedAt ?? new Date()) : null;

    // Tell Prisma to find the row by its ID and overwrite only the provided modifications
        const updatedTicket = await prisma.repairTicket.update({
            where: { 
        id: ticketIdNumber 
            },
      data: {
        // If status is passed, update it; if technicianNotes is passed, update it.
        // If either is missing, JavaScript leaves the existing column untouched!
        ...(status !== undefined && { status: validatedStatus, closedAt: completionTimestamp }),
        ...(technicianNotes !== undefined && { technicianNotes })
      }
    });
    return res.status(200).json({
      success: true,
      message: "Workbench progress logged successfully.",
      ticket: updatedTicket
    });
    } catch (err: unknown) {
    const errorInstance = err instanceof Error ? err.message : 'Database modify error';
    console.error("Error updating progress:", errorInstance);
    return res.status(500).json({ error: "Failed to update record." });
  }
};
