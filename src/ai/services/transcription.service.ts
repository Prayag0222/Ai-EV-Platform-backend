export interface TranscriptionResult {
  transcript: string;
}

interface GroqWhisperResponse {
  text: string;
}

export class TranscriptionService {
  async transcribe(
    audioBuffer: Buffer
  ): Promise<TranscriptionResult> {
    if (!audioBuffer || audioBuffer.length === 0) {
      throw new Error("EMPTY_AUDIO");
    }

    const audioForm = new FormData();

    const audioBlob = new Blob(
      [audioBuffer as unknown as BlobPart],
      {
        type: "audio/webm",
      }
    );

    audioForm.append(
      "file",
      audioBlob,
      "voice-input.webm"
    );

    audioForm.append(
      "model",
      "whisper-large-v3"
    );

    const response = await fetch(
      "https://api.groq.com/openai/v1/audio/transcriptions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: audioForm,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "❌ Groq Whisper error:",
        errorText
      );

      throw new Error("TRANSCRIPTION_FAILED");
    }

    const result =
      (await response.json()) as GroqWhisperResponse;

    const transcript =
      result.text?.trim();

    if (!transcript) {
      throw new Error("EMPTY_TRANSCRIPTION");
    }

    return {
      transcript,
    };
  }
}