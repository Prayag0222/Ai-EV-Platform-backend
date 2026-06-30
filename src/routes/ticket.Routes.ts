import { Router } from 'express';
import { createTicket, deleteTicket,  } from '../controllers/ticket.Controller.js';
import { authMiddleware } from '../middlewares/auth.Middleware.js';

const router = Router();

router.use(authMiddleware)
// 🎫 Dedicated Ticket operation lane
// Frontend endpoint path targets this directly to create a workspace entry
router.post('/createTicket', createTicket);
router.delete('/deleteTicket/:id',deleteTicket)


export default router;