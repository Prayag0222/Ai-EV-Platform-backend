import express from 'express';
import { signupUser, loginUser } from '../controllers/authController.js'; // Added your loginUser import
import {authMiddleware} from '../middlewares/auth.Middleware.js'

const router = express.Router();

// Route mappings

router.post('/signup', signupUser);
router.post('/login', loginUser); // Map your new login endpoint!


router.get('/me',authMiddleware,(req,res)=>{
    return res.status(200).json({
    authenticated:true,
    user:req.user
    });
});

export default router;