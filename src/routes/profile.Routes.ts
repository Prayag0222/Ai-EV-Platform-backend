import express from 'express';
import {
  getProfile,
  updateProfile,
} from '../controllers/profile.Controller.js';

import { authMiddleware } from '../middlewares/auth.Middleware.js';

const router = express.Router();

router.get('/me', authMiddleware, getProfile);

router.put('/me', authMiddleware, updateProfile);

export default router;