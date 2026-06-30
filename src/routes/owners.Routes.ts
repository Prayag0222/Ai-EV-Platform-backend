import { Router } from 'express';
import { ownerDashboardController } from '../controllers/ownerDashboard.Controller.js';
import { authMiddleware } from '../middlewares/auth.Middleware.js';


const router = Router();

// GET /api/owner/dashboard
router.get('/dashboard',authMiddleware, ownerDashboardController);

export default router;