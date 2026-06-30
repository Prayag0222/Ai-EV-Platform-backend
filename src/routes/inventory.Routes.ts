import { Router } from 'express';
import {
  createInventoryItem,
  getAllInventory,
  searchInventory,
  updateInventoryItem,
  deleteInventoryItem,
  addStockToItem,
  deductStockFromItems,
} from '../controllers/inventory.Controller.js';
import { authMiddleware } from '../middlewares/auth.Middleware.js';

const router = Router();
router.use(authMiddleware)

router.post('/', createInventoryItem);
router.get('/search', searchInventory);
router.get('/', getAllInventory);
router.put('/:id', updateInventoryItem);
router.delete('/:id', deleteInventoryItem);
router.patch('/:id/stock', addStockToItem);
router.post('/deduct/items', deductStockFromItems);

export default router;
