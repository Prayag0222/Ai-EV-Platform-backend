import { Router } from 'express';
import type { Request, Response } from 'express';
import multer from 'multer';
import { prisma } from '../config/prisma.js'; 

const router = Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB Limit
  },
});

router.post(
  '/api/technician/workspace/:ticketId/notes/audio',
  upload.single('audio'),
  async (req: Request, res: Response): Promise<void> => {
    try {
      const ticketIdParam = req.params.ticketId;

      if (!ticketIdParam || !req.file) {
        res.status(400).json({ success: false, error: 'Required parameters or files missing.' });
        return;
      }

      // --- STAGE 1: LIGHTNING FAST TRANSCRIPTION ---
      const audioForm = new FormData();
      const audioBlob = new Blob([req.file.buffer as unknown as BlobPart], { type: 'audio/webm' });
      
      audioForm.append('file', audioBlob, 'audio.webm');
      audioForm.append('model', 'whisper-large-v3');
      

      const groqAudioResponse = await fetch(
        'https://api.groq.com/openai/v1/audio/transcriptions',
        {
          headers: {
            Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          },
          method: 'POST',
          body: audioForm,
        }
      );

      if (!groqAudioResponse.ok) {
        throw new Error(`Groq Whisper failed: ${await groqAudioResponse.text()}`);
      }

      interface GroqWhisperResponse { text: string; }
      const whisperResult = (await groqAudioResponse.json()) as GroqWhisperResponse;
      const rawTranscription = whisperResult.text;
      
      // --- STAGE 2: SUB-SECOND AI TRANSLATION ---
      let polishedEnglishText = rawTranscription;

      const groqChatResponse = await fetch(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          headers: {
            Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            // 🛠️ FIX: Changed from 'llama-3.3-70b-specdec' to the ultra-stable 'llama-3.3-70b-versatile'
            model: 'llama-3.3-70b-versatile', 
            messages: [
              {
                role: 'system',
                content: 'You are an expert EV mechanic assistant. Translate the following multi-lingual technician workshop note into a clean, concise, and professional English diagnostic sentence. Do not include any introductory phrases, filler text, or conversational remarks. Return ONLY the direct English translation text.'
              },
              {
                role: 'user',
                content: rawTranscription
              }
            ],
            temperature: 0.1,
            max_tokens: 150
          }),
        }
      );

      if (groqChatResponse.ok) {
        interface GroqChatResponse {
          choices: Array<{ message: { content: string } }>;
        }
        const chatResult = (await groqChatResponse.json()) as GroqChatResponse;
        if (chatResult?.choices?.[0]?.message?.content) {
          polishedEnglishText = chatResult.choices[0].message.content.trim();
        }
      }

      // --- STAGE 3: PERSIST TO DATABASE ---
      const cleanTicketId = Array.isArray(ticketIdParam) ? ticketIdParam[0] : ticketIdParam;
      const parsedTicketId = parseInt(cleanTicketId || '', 10);

      if (isNaN(parsedTicketId)) {
        res.status(400).json({ success: false, error: 'Invalid Ticket ID numerical format.' });
        return;
      }
      const ticket = await prisma.repairTicket.findUnique({
    where:{
        id: parsedTicketId
    }
});

if(!ticket){
    res.status(404).json({
        success:false,
        error:"Repair ticket not found."
    });
    return;
}

      const newNote = await prisma.technicianNote.create({
        data: {
          ticketId: parsedTicketId,
          rawVoiceText: rawTranscription,      
          structuredText: polishedEnglishText, 
          quickTags: ['Groq-Voice', 'Whisper-Llama3'],
        },
      });

      res.status(201).json({
        success: true,
        note: newNote,
      });
    } catch (error: unknown) {
      console.error('❌ Groq Audio Pipeline Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown pipeline failure';
      res.status(500).json({ success: false, error: errorMessage });
    }
  }
);

export default router;
