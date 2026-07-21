import { Router } from 'express';
import { body } from 'express-validator';
import {
  sendMessage,
  createSession,
  getSessions,
  getSession,
  deleteSession,
} from '../controllers/chatController.js';
import { optionalAuth, protect } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';

const router = Router();

router.post(
  '/message',
  optionalAuth,
  [
    body('message').trim().notEmpty().withMessage('Message is required'),
    body('language').optional().isIn(['en', 'si', 'ta']),
  ],
  validate,
  sendMessage
);

router.post('/sessions', protect, createSession);
router.get('/sessions', protect, getSessions);
router.get('/sessions/:id', protect, getSession);
router.delete('/sessions/:id', protect, deleteSession);

export default router;
