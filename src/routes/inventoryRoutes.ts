import { Router } from 'express';
import {
  createInventoryItem,
  getAllInventory,
  searchInventory,
  updateInventoryItem,
  deleteInventoryItem,
  addStockToItem,
  deductStockFromItems,
} from '../controllers/inventoryController.js';

const router = Router();

router.post('/', createInventoryItem);
router.get('/search', searchInventory);
router.get('/', getAllInventory);
router.put('/:id', updateInventoryItem);
router.delete('/:id', deleteInventoryItem);
router.patch('/:id/stock', addStockToItem);
router.post('/deduct/items', deductStockFromItems);

export default router;
