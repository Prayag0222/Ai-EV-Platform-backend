import { Router } from "express";
import multer from "multer";

import { authMiddleware } from "../middlewares/auth.Middleware.js";
import {
  chatWithAI,
  getAIConversation,
} from "../controllers/ai.controller.js";

import { TranscriptionService } from "../ai/services/transcription.service.js";

const router = Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

const transcriptionService = new TranscriptionService();

router.use(authMiddleware);

router.post("/chat", chatWithAI);

router.get("/chat/:ticketId", getAIConversation);

router.post(
  "/transcribe",
  upload.single("audio"),
  async (req, res): Promise<void> => {
    try {
      if (!req.file) {
        res.status(400).json({
          success: false,
          error: "Audio file is required.",
        });
        return;
      }

      const result = await transcriptionService.transcribe(
        req.file.buffer
      );

      res.status(200).json({
        success: true,
        transcript: result.transcript,
      });
    } catch (error) {
      console.error("❌ AI transcription route error:", error);

      if (
        error instanceof Error &&
        error.message === "EMPTY_AUDIO"
      ) {
        res.status(400).json({
          success: false,
          error: "Audio file is empty.",
        });
        return;
      }

      if (
        error instanceof Error &&
        error.message === "EMPTY_TRANSCRIPTION"
      ) {
        res.status(422).json({
          success: false,
          error: "No speech could be detected from the audio.",
        });
        return;
      }

      res.status(500).json({
        success: false,
        error: "Failed to transcribe audio.",
      });
    }
  }
);

export default router;