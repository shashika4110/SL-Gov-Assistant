import { generateChatResponse } from '../services/geminiService.js';
import { ChatSession } from '../models/ChatSession.js';
import { isDBConnected } from '../config/db.js';
import { AppError } from '../middleware/errorHandler.js';

export const sendMessage = async (req, res, next) => {
  try {
    const { message, history = [], language = 'en', sessionId } = req.body;

    if (!message?.trim()) throw new AppError('Message is required', 400);

    const reply = await generateChatResponse(message.trim(), history, language);

    let session = null;
    if (isDBConnected() && req.user && sessionId) {
      session = await ChatSession.findOne({ _id: sessionId, user: req.user._id });
      if (session) {
        session.messages.push(
          { role: 'user', content: message.trim() },
          { role: 'assistant', content: reply }
        );
        if (session.messages.length === 2) {
          session.title = message.trim().slice(0, 60);
        }
        await session.save();
      }
    }

    res.json({
      success: true,
      data: { reply, sessionId: session?._id },
    });
  } catch (err) {
    next(err);
  }
};

export const createSession = async (req, res, next) => {
  try {
    if (!isDBConnected() || !req.user) {
      return res.json({ success: true, data: { session: null } });
    }

    const session = await ChatSession.create({
      user: req.user._id,
      language: req.body.language || 'en',
      messages: [],
    });

    res.status(201).json({ success: true, data: { session } });
  } catch (err) {
    next(err);
  }
};

export const getSessions = async (req, res, next) => {
  try {
    if (!isDBConnected() || !req.user) {
      return res.json({ success: true, data: { sessions: [] } });
    }

    const sessions = await ChatSession.find({ user: req.user._id })
      .select('title language createdAt updatedAt messages')
      .sort({ updatedAt: -1 })
      .limit(20);

    res.json({ success: true, data: { sessions } });
  } catch (err) {
    next(err);
  }
};

export const getSession = async (req, res, next) => {
  try {
    const session = await ChatSession.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!session) throw new AppError('Session not found', 404);
    res.json({ success: true, data: { session } });
  } catch (err) {
    next(err);
  }
};

export const deleteSession = async (req, res, next) => {
  try {
    await ChatSession.deleteOne({ _id: req.params.id, user: req.user._id });
    res.json({ success: true, message: 'Session deleted' });
  } catch (err) {
    next(err);
  }
};
