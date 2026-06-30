export interface InvoiceTemplateItem {
  name: string;
  sku: string;
  qty: number;
  price: number;
}

export interface InvoiceTemplateData {
  invoiceNo: string;
  invoiceDate: string;

  shopName: string;
  shopAddress?: string;
  shopPhone?: string;
  shopEmail?: string;
  gstNumber?: string;

  customerName: string;
  customerPhone: string;
  customerAddress?: string;

  vehicle?: string;
  ticketReference?: string;

  items: InvoiceTemplateItem[];

  labour: number;
  tax: number;
  discount: number;
  grandTotal: number;

  paymentStatus: string;
  paymentMethod: string;

  notes?: string;

  logo?: string;
}