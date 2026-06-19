import { type Request, type Response } from 'express';
import { prisma } from '../config/prisma.js';

interface InvoiceItemInput {
  name: string;
  sku: string;
  qty: number;
  price: number;
}

/**
 * 💰 ENDPOINT 1: Create a flat, direct invoice (Repair loop or Quick counter sale)
 * Route: POST /api/invoice
 */
export const createInvoice = async (req: Request, res: Response) => {
  try {
    const { 
      customerName, 
      customerPhone, 
      ticketId, 
      items, 
      laborCharge, 
      paymentStatus, 
      paymentMethod 
    } = req.body;


    if (ticketId) {
    const ticket =
        await prisma.repairTicket.findUnique({
            where:{
                id:Number(ticketId)
            }
        });

    if(!ticket){
        return res.status(404).json({
            success:false,
            error:"Repair ticket not found."
        });
    }
}
const saleType =
ticketId
?
"REPAIR"
:
"COUNTER";


    // 🛡️ Strict Request Validation
    if (!customerName || !customerPhone || !items || !paymentStatus || !paymentMethod) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields. Provide customerName, customerPhone, items, paymentStatus, and paymentMethod.',
      });
    }

    // 🧮 CALCULATE PARTS TOTAL
    let partsTotal = 0;
    if (Array.isArray(items)) {
      const typedItems = items as InvoiceItemInput[];
      for (const item of typedItems) {
        const itemPrice = Number(item.price) || 0;
        const itemQty = Number(item.qty) || 1;
        partsTotal += itemPrice * itemQty;
      }
    }

    const flatLabor = Number(laborCharge) || 0;
    const calculatedGrandTotal = partsTotal + flatLabor;

    // ⚡ AUTO-GENERATE UNIQUE INVOICE NUMBER (e.g., INV-2026-4821)
    const uniqueSuffix = Math.floor(1000 + Math.random() * 9000);
    const generatedInvoiceNo = `INV-${Date.now()}-${uniqueSuffix}`;

    

    // Write record to PostgreSQL via Prisma
    const newInvoice = await prisma.invoice.create({
      data: {
        invoiceNo: generatedInvoiceNo,
        customerName,
        customerPhone,
        ticketId: ticketId ? Number(ticketId) : null,
        saleType,
        items, // Saves cleanly into the JSON column data frame
        laborCharge: flatLabor,
        grandTotal: calculatedGrandTotal,
        paymentStatus,
        paymentMethod,
      },
    });

    return res.status(201).json({
      success: true,
      message: 'Invoice processed cleanly inside the ledger matrix!',
      invoice: newInvoice,
    });

  } catch (err: unknown) {
    const errorInstance = err instanceof Error ? err : new Error(String(err));
    console.error('Error creating invoice record:', errorInstance);
    return res.status(500).json({ 
      success: false, 
      error: 'Server error occurred while executing financial validation.' 
    });
  }
};

/**
 * 📋 ENDPOINT 2: Fetch the entire billing ledger history
 * Route: GET /api/invoice
 */
export const getAllInvoices = async (req: Request, res: Response) => {
  try {
    const invoices = await prisma.invoice.findMany({
      include:{
    ticket:true
},
      orderBy: {
        createdAt: 'desc', // Latest transaction statements pop up at the top
      },
    });

    return res.status(200).json({
      success: true,
      invoices,
    });
  } catch (err: unknown) {
    const errorInstance = err instanceof Error ? err : new Error(String(err));
    console.error('Error retrieving historical billing ledgers:', errorInstance);
    return res.status(500).json({ success: false, error: 'Failed to synchronize financial histories.' });
  }
};