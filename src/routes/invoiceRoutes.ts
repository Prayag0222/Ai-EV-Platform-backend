import { Router } from 'express';
import { createInvoice, deleteInvoice, getAllInvoices, updateInvoicePayment } from '../controllers/invoiceController.js';

const router = Router();

// 🟢 POST requests handle transaction execution records
router.post('/', createInvoice);

// 🔵 GET requests download active transaction records
router.get('/', getAllInvoices);
router.patch('/:id', updateInvoicePayment);
router.delete('/:id', deleteInvoice);

export default router;
