import { Router } from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validate.js';
import { AppError } from '../middleware/errorHandler.js';

const router = Router();

/** Accept transcribed text from client-side Web Speech API or future Google Cloud STT */
router.post(
  '/transcribe',
  [body('text').trim().notEmpty().withMessage('Transcribed text is required')],
  validate,
  (req, res) => {
    res.json({
      success: true,
      data: {
        text: req.body.text,
        language: req.body.language || 'en',
        source: 'client-speech-api',
      },
    });
  }
);

/** Text-to-speech hint — client uses Web Speech Synthesis API */
router.post('/speak', (req, res) => {
  const { text } = req.body;
  if (!text?.trim()) throw new AppError('Text is required', 400);

  res.json({
    success: true,
    data: {
      text: text.trim(),
      useClientTTS: true,
      message: 'Use browser SpeechSynthesis API on the frontend',
    },
  });
});

export default router;
