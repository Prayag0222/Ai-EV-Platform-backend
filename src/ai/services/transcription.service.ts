export interface TranscriptionResult {
  transcript: string;
}

interface GroqWhisperResponse {
  text: string;
}

interface GroqChatResponse {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
}

export class TranscriptionService {
  async transcribe(
    audioBuffer: Buffer
  ): Promise<TranscriptionResult> {
    if (!audioBuffer || audioBuffer.length === 0) {
      throw new Error("EMPTY_AUDIO");
    }

    // =========================================================
    // STAGE 1: SPEECH → TEXT
    // =========================================================

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

    const whisperResponse = await fetch(
      "https://api.groq.com/openai/v1/audio/transcriptions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: audioForm,
      }
    );

    if (!whisperResponse.ok) {
      const errorText =
        await whisperResponse.text();

      console.error(
        "❌ Groq Whisper error:",
        errorText
      );

      throw new Error(
        "TRANSCRIPTION_FAILED"
      );
    }

    const whisperResult =
      (await whisperResponse.json()) as GroqWhisperResponse;

    const rawTranscript =
      whisperResult.text?.trim();

    if (!rawTranscript) {
      throw new Error(
        "EMPTY_TRANSCRIPTION"
      );
    }

    // =========================================================
    // STAGE 2: NORMALIZE SCRIPT
    // Hindi speech should become Roman Hindi/Hinglish.
    // English/Hinglish should remain natural.
    // Technical terms, numbers and units must be preserved.
    // =========================================================

    const normalizedTranscript =
      await this.normalizeTranscript(
        rawTranscript
      );

    return {
      transcript: normalizedTranscript,
    };
  }

  private async normalizeTranscript(
    rawTranscript: string
  ): Promise<string> {
    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model:
              "openai/gpt-oss-20b",

            temperature: 0.1,

            max_tokens: 300,

            messages: [
              {
                role: "system",
                content: `
You are a speech transcription normalizer for an EV technician application.

Your job is NOT to translate the technician's message into English.

Preserve the technician's original language and meaning.

Rules:

1. If the transcription is already in English, return natural English.
2. If the transcription is Hindi written in Devanagari script, transliterate it into easy-to-read Roman Hindi/Hinglish.
3. If the transcription is already Hinglish/Roman Hindi, preserve it naturally.
4. Do not translate Hindi into formal English.
5. Preserve technical EV terms exactly when possible.
6. Preserve numbers exactly.
7. Preserve electrical units exactly, such as V, A, Ah, kW, °C.
8. Preserve terms such as BMS, battery, cell, controller, throttle, motor, charger, voltage, current, DTC and MOSFET.
9. Do not add explanations.
10. Do not add greetings.
11. Do not summarize.
12. Do not change diagnostic facts.
13. Return ONLY the cleaned transcript.
14. Keep the result concise and natural for a technician to read and edit.

Example behavior:

Hindi Devanagari:
"बैटरी पैंसठ वोल्ट है और थ्रॉटल देने पर सत्तावन वोल्ट हो रही है"

Desired:
"Battery 65 volt hai aur throttle dene par 57 volt ho rahi hai."

Hinglish:
"Battery 65 volt hai aur throttle dene pe 57 volt gir rahi hai"

Desired:
"Battery 65 volt hai aur throttle dene pe 57 volt gir rahi hai."

English:
"The battery voltage is 65V and drops to 57V under throttle."

Desired:
"The battery voltage is 65V and drops to 57V under throttle."

Never return markdown, bullets, labels, quotes, or explanations.
                `.trim(),
              },
              {
                role: "user",
                content: rawTranscript,
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        const errorText =
          await response.text();

        console.error(
          "⚠️ Transcript normalization failed:",
          errorText
        );

        // Whisper result is still usable.
        return rawTranscript;
      }

      const result =
        (await response.json()) as GroqChatResponse;

      const normalized =
        result.choices?.[0]?.message?.content?.trim();

      if (!normalized) {
        return rawTranscript;
      }

      return normalized;
    } catch (error) {
      console.error(
        "⚠️ Transcript normalization error:",
        error
      );

      // Never lose a valid Whisper transcription
      // just because the normalization step failed.
      return rawTranscript;
    }
  }
}