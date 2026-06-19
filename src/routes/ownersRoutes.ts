import { Router } from 'express';
import { ownerDashboardController } from '../controllers/ownerDashboardController.js';


const router = Router();

// GET /api/owner/dashboard
router.get('/dashboard',ownerDashboardController);

export default router;