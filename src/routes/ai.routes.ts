import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.Middleware.js";
import { chatWithAI,getAIConversation } from "../controllers/ai.controller.js";

const router = Router();

router.use(authMiddleware);

router.post("/chat", chatWithAI);
router.get("/chat/:ticketId", getAIConversation);


export default router;