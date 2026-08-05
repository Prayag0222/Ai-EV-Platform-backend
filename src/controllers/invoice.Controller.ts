import { type Request, type Response } from 'express';
import { prisma } from '../config/prisma.js';
import { generateInvoicePDF } from "../pdf/pdf.service.js";

interface InvoiceItemInput {
  name: string;
  sku: string;
  qty: number;
  price: number;
  inventoryId?:number;
}

const getInvoicePDF = async (
  invoiceId: number,
  shopId: string
): Promise<{ pdf: Buffer; invoice: any }> => {

 console.log("============== PDF DEBUG ==============");
  console.log("Invoice ID:", invoiceId);
  console.log("Shop ID:", shopId);

  const invoice = await prisma.invoice.findFirst({
    where: {
      id: invoiceId,
      shopId,
    },
  });

    console.log("Invoice Found:", invoice);

  if (!invoice) {
    throw new Error("Invoice not found");
  }

  const pdf = await generateInvoicePDF(invoice);

  return {
    pdf,
    invoice,
  };
};


export const printInvoicePDF = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);
    const shopId = (req as any).user?.shopId;

    const { pdf, invoice } = await getInvoicePDF(id, shopId);

    res.setHeader("Content-Type", "application/pdf");

    res.setHeader(
      "Content-Disposition",
      `inline; filename="${invoice.invoiceNo}.pdf"`
    );

    res.setHeader("Cache-Control", "no-store");

    return res.send(pdf);
  } catch (error) {
    console.error("PDF print failed:", error);

    return res.status(404).json({
      success: false,
      message: "Invoice not found",
    });
  }
};



export const createInvoice = async (req: Request, res: Response) => {
  try {
    const shopId = (req as any).user?.shopId;
if (!shopId) return res.status(403).json({ message: 'Shop not found.' });
    const {
      customerName,
      customerAddress,
      customerPhone,
      shopName,
      shopAddress,
      gstNumber,
      ticketId,
      items,
      laborCharge,
      tax,
      discount,
      notes,
      paymentStatus,
      paymentMethod
    } = req.body;

    if (ticketId) {
      const ticket = await prisma.repairTicket.findUnique({
        where: { id: Number(ticketId) }
      });
      if (!ticket) {
        return res.status(404).json({
          success: false,
          error: "Repair ticket not found."
        });
      }
    }

    const saleType = ticketId ? "REPAIR" : "COUNTER";

    // ✅ Stock validation
if (Array.isArray(items)) {
  for (const item of items as InvoiceItemInput[]) {
    if (!item.inventoryId) continue; // skip non-inventory items (labor etc.)
    
    const inventoryItem = await prisma.inventory.findUnique({
      where: { id: Number(item.inventoryId) }
    });

    if (!inventoryItem) {
      return res.status(404).json({ success: false, error: `Item "${item.name}" not found in inventory.` });
    }

    if (item.qty > inventoryItem.stockLevel) {
      return res.status(400).json({ 
        success: false, 
        error: `Insufficient stock for "${item.name}". Available: ${inventoryItem.stockLevel}, Requested: ${item.qty}` 
      });
    }
  }
}

    if (!customerName || !customerPhone || !items || !paymentStatus || !paymentMethod) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields.',
      });
    }

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
    const taxAmount = Number(tax) || 0;
    const discountAmount = Number(discount) || 0;
    const calculatedGrandTotal = partsTotal + flatLabor + taxAmount - discountAmount;

    const uniqueSuffix = Math.floor(1000 + Math.random() * 9000);
    const generatedInvoiceNo = `INV-${Date.now()}-${uniqueSuffix}`;

    const newInvoice = await prisma.invoice.create({
      data: {
        invoiceNo: generatedInvoiceNo,
        shopName: shopName || "VoltOps",
        shopAddress: shopAddress || "",
        gstNumber: gstNumber || null,
        customerName,
        customerAddress: customerAddress || "",
        customerPhone,
        ticketId: ticketId ? Number(ticketId) : null,
        saleType,
        items,
        laborCharge: flatLabor,
        tax: taxAmount,
        discount: discountAmount,
        grandTotal: calculatedGrandTotal,
        paymentStatus,
        paymentMethod,
        notes: notes || "",
        shopId
      },
    });

    // ✅ Deduct stock after invoice created
if (Array.isArray(items)) {
  for (const item of items as InvoiceItemInput[]) {
    if (!item.inventoryId) continue;
    
    await prisma.inventory.update({
      where: { id: Number(item.inventoryId) },
      data: {
        stockLevel: { decrement: item.qty }
      }
    });
  }
}
    return res.status(201).json({
      success: true,
      message: 'Invoice created successfully.',
      invoice: newInvoice,
    });

  } catch (err: unknown) {
    const errorInstance = err instanceof Error ? err : new Error(String(err));
    console.error('Error creating invoice record:', errorInstance);
    return res.status(500).json({
      success: false,
      error: 'Server error occurred while creating invoice.'
    });
  }
};

export const getAllInvoices = async (req: Request, res: Response) => {
  try {
    const shopId = (req as any).user?.shopId;
    const invoices = await prisma.invoice.findMany({
      where:{shopId},
      include:{
        ticket: {
          include: {
            vehicle: { select: { vehicleModel: true, vin: true } },
            technician: { select: { fullName: true } }
          }
        }
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return res.status(200).json({
      success: true,
      invoices,
    });
  } catch (err: unknown) {
    const errorInstance = err instanceof Error ? err : new Error(String(err));
    console.error('Error retrieving invoices:', errorInstance);
    return res.status(500).json({ success: false, error: 'Failed to retrieve invoices.' });
  }
};

export const downloadInvoicePDF = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);
    const shopId = (req as any).user?.shopId;

    const { pdf, invoice } = await getInvoicePDF(id, shopId);

    res.setHeader("Content-Type", "application/pdf");

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${invoice.invoiceNo}-${invoice.customerName.replace(
        /\s+/g,
        "-"
      )}.pdf`
    );

    res.setHeader("Cache-Control", "no-store");

    return res.send(pdf);
  } catch (error) {
    console.error("PDF download failed:", error);

    return res.status(404).json({
      success: false,
      message: "Invoice not found",
    });
  }
};


export const updateInvoicePayment = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { paymentStatus, paymentMethod } = req.body;
  if (!Number.isInteger(id) || !['PAID', 'UNPAID'].includes(paymentStatus)) {
    return res.status(400).json({ success: false, error: 'A valid invoice and payment status are required.' });
  }
  try {
    const invoice = await prisma.invoice.update({
      where: { id },
      data: { paymentStatus, ...(paymentMethod ? { paymentMethod: String(paymentMethod) } : {}) },
      include: { ticket: { include: { vehicle: true, technician: true } } }
    });
    return res.status(200).json({ success: true, invoice });
  } catch (error) {
    console.error('Invoice payment update failed:', error);
    return res.status(404).json({ success: false, error: 'Invoice not found.' });
  }
};

export const deleteInvoice = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ success: false, error: 'Invalid invoice id.' });
  try {
    await prisma.invoice.delete({ where: { id } });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Invoice deletion failed:', error);
    return res.status(404).json({ success: false, error: 'Invoice not found.' });
  }
};
