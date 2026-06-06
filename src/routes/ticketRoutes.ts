import { Router } from 'express';
import { createTicket } from '../controllers/ticketController.js';

const router = Router();

// 🎫 Dedicated Ticket operation lane
// Frontend endpoint path targets this directly to create a workspace entry
router.post('/createTicket', createTicket);

export default router;