import { Router } from 'express';
import { createInvoice, getAllInvoices } from '../controllers/invoiceController.js';

const router = Router();

// 🟢 POST requests handle transaction execution records
router.post('/', createInvoice);

// 🔵 GET requests download active transaction records
router.get('/', getAllInvoices);

export default router;