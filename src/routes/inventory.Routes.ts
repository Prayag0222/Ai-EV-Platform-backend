import { Router } from 'express';

import {
  createInventoryItem,
  getAllInventory,
  searchInventory,
  updateInventoryItem,
  archiveInventoryItem,
  restoreInventoryItem,
  addStockToItem,
  deductStockFromItems,
} from '../controllers/inventory.Controller.js';

import { authMiddleware } from '../middlewares/auth.Middleware.js';

const router = Router();

router.use(authMiddleware);

router.post('/', createInventoryItem);

router.get('/search', searchInventory);

router.get('/', getAllInventory);

router.put('/:id', updateInventoryItem);

router.patch('/:id/archive', archiveInventoryItem);

router.patch('/:id/restore', restoreInventoryItem);

router.patch('/:id/stock', addStockToItem);

router.post('/deduct/items', deductStockFromItems);

export default router;