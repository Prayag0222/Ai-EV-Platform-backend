import { Router } from 'express';
import {
  createInventoryItem,
  getAllInventory,
  updateInventoryItem,
  deleteInventoryItem,
  addStockToItem,
} from '../controllers/inventoryController.js';

const router = Router();

// 🟢 POST request to add a new item
router.post('/', createInventoryItem);

// 🔵 GET request to fetch all items
router.get('/', getAllInventory);

// 🟡 PUT request to update an item
router.put('/:id', updateInventoryItem);

// 🔴 DELETE request to remove an item
router.delete('/:id', deleteInventoryItem);

// 🟣 PATCH request to add stock to an item
router.patch('/:id/stock', addStockToItem);

export default router;