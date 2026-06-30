import { Router } from 'express';
import { createInvoice, deleteInvoice, getAllInvoices, updateInvoicePayment,downloadInvoicePDF, printInvoicePDF} from '../controllers/invoice.Controller.js';
import { authMiddleware } from '../middlewares/auth.Middleware.js';

const router = Router();

router.use(authMiddleware)

router.post('/', createInvoice);
router.get('/', getAllInvoices);
router.get("/:id/pdf", downloadInvoicePDF);
router.get("/:id/print", printInvoicePDF);
router.patch('/:id', updateInvoicePayment);
router.delete('/:id', deleteInvoice);

export default router;
