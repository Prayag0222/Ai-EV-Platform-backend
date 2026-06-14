import { type Request, type Response } from 'express';
// 🔌 Reusing your centralized global prisma instance cleanly
import { prisma } from '../config/prisma.js';

/**
 * 🛰️ ENDPOINT 1: Fetch all live workshop tickets with attached client handles
 * Route: GET /api/operation/tickets
 */
export const getOperationalTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await prisma.repairTicket.findMany({
      include: {
        customer: {
          select: {
            name: true,
            phone: true
          }
        },
        technician:{
         select:{
          fullName:true
         }
        }
      },
      // ✅ FIXED: Sorted by id descending to keep the newest tickets at the top safely
      orderBy: {
        id: 'desc'
      }
    });

    res.status(200).json({
      success: true,
      tickets
    });
  } catch (error) {
    console.error('Operational fetch failed thread error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to synchronize live workshop operations deck.'
    });
  }
};

/**
 * 💾 ENDPOINT 2: Single-tap status modifier and scratchpad writer
 * Route: PATCH /api/operation/update-ticket
 */
export const updateTicketOperation = async (req: Request, res: Response) => {
  const { ticketId, status, technicianNotes } = req.body;

  if (!ticketId) {
    return res.status(400).json({
      success: false,
      error: 'Missing required Ticket ID parameter context.'
    });
  }

  try {
    // 📝 Execute target update matching your exact schema layout shapes
    const updatedTicket = await prisma.repairTicket.update({
      where: {
        // ✅ FIXED: Converted ticketId to a strict Number matching your integer column rule
        id: Number(ticketId)
      },
      data: {
        ...(status && { status }),
        ...(technicianNotes !== undefined && { technicianNotes })
      }
    });

    res.status(200).json({
      success: true,
      message: 'Operational log state committed successfully.',
      ticket: updatedTicket
    });
  } catch (error) {
    console.error('Operational save modification failed thread error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to overwrite live asset operations record data.'
    });
  }
};