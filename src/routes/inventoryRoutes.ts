import { Router } from 'express';
import { createInventoryItem, getAllInventory } from '../controllers/inventoryController.js';

const router = Router();

// 🟢 POST request to add a new item
router.post('/', createInventoryItem);

// 🔵 GET request to fetch all items
router.get('/', getAllInventory);

export default router;