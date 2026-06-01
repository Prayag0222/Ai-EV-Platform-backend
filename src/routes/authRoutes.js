import express from 'express';
import { signupUser, loginUser } from '../controllers/authController.js'; // Added your loginUser import

const router = express.Router();

// Route mappings
router.post('/signup', signupUser);
router.post('/login', loginUser); // Map your new login endpoint!

export default router;