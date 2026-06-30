import { Router } from 'express';
// 🔌 Import your fresh operational controller brains
import { getOperationalTickets, updateTicketOperation } from '../controllers/operation.Controller.js';
import { authMiddleware } from '../middlewares/auth.Middleware.js';

const router = Router();

router.use(authMiddleware)

/**
 * 🛰️ LANE 1: Fetching active shop cards
 * Frontend will call: GET http://localhost:3000/api/operation/tickets
 */
router.get('/tickets', getOperationalTickets);

/**
 * 💾 LANE 2: Modifying status or typing notes
 * We use PATCH because we are executing a partial update on existing rows
 * Frontend will call: PATCH http://localhost:3000/api/operation/update-ticket
 */
router.patch('/update-ticket', updateTicketOperation);

export default router;