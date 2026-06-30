import { getBrowser } from "./browser.js";
import { generateInvoiceHTML } from "./invoiceTemplate.js";
import type { InvoiceTemplateData } from "../templates/invoice/invoiceTypes.js";
import type { invoice } from "../generated/client/index.js";

export async function generateInvoicePDF(invoice: invoice) {
  const browser = await getBrowser();

  const context = await browser.newContext();

  const page = await context.newPage();

  // Convert Prisma model → PDF DTO
  const data: InvoiceTemplateData = {
    invoiceNo: invoice.invoiceNo,
    invoiceDate: new Date(invoice.createdAt).toLocaleDateString("en-IN"),

    shopName: invoice.shopName ?? "",
    shopAddress: invoice.shopAddress ?? "",
    shopPhone: "",
    shopEmail: "",
    gstNumber: invoice.gstNumber ?? "",

    customerName: invoice.customerName,
    customerPhone: invoice.customerPhone,
    customerAddress: invoice.customerAddress ?? "",

    vehicle: "",
    ticketReference: invoice.ticketId
      ? `EV-${String(invoice.ticketId).padStart(4, "0")}`
      : "Counter Sale",

    items: Array.isArray(invoice.items)
      ? (invoice.items as any)
      : [],

    labour: invoice.laborCharge ?? 0,
    tax: invoice.tax ?? 0,
    discount: invoice.discount ?? 0,
    grandTotal: invoice.grandTotal,

    paymentStatus: invoice.paymentStatus,
    paymentMethod: invoice.paymentMethod,

    notes: invoice.notes ?? "",

    logo: "",
  };

  const html = generateInvoiceHTML(data);

  await page.setContent(html, {
    waitUntil: "networkidle",
  });

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: {
      top: "15mm",
      right: "15mm",
      bottom: "15mm",
      left: "15mm",
    },
  });

  await page.close();
  await context.close();

  return pdf;
}