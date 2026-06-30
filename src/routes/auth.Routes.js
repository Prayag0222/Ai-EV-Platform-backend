import express from 'express';
import { signupUser, loginUser, getCurrentUser, logout } from '../controllers/auth.Controller.js'; // Added your loginUser import
import {authMiddleware} from '../middlewares/auth.Middleware.js'

const router = express.Router();

// Route mappings

router.post('/signup', signupUser);
router.post('/login',loginUser); // Map your new login endpoint!
// authRoutes.ts
router.post('/logout', logout);


router.get('/me',authMiddleware,getCurrentUser);

export default router;