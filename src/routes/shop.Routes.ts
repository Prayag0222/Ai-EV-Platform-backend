import express from 'express';
import { createShop, updateShop, getShop } from '../controllers/shop.Controller.js';
import { authMiddleware } from '../middlewares/auth.Middleware.js';

const router = express.Router();

router.post('/create', authMiddleware, createShop);
router.put('/update', authMiddleware, updateShop);
router.get('/', authMiddleware, getShop);

export default router;