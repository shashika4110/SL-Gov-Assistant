import { body } from 'express-validator';
import { User } from '../models/User.js';
import { AppError } from '../middleware/errorHandler.js';
import { signToken } from '../middleware/auth.js';
import { isDBConnected } from '../config/db.js';
import jwt from 'jsonwebtoken';

// Demo mode in-memory user storage when database is unavailable
const demoUsers = new Map();

const generateDemoToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET || 'dev_jwt_secret', {
    expiresIn: '7d',
  });
};

export const register = async (req, res, next) => {
  try {
    const { name, email, password, preferredLanguage } = req.body;

    if (isDBConnected()) {
      // Use MongoDB if available
      const exists = await User.findOne({ email });
      if (exists) throw new AppError('Email already registered', 409);

      const user = await User.create({ name, email, password, preferredLanguage });
      const token = signToken(user._id);

      return res.status(201).json({
        success: true,
        data: { user, token },
      });
    }

    // Demo mode: in-memory storage
    if (demoUsers.has(email)) {
      throw new AppError('Email already registered', 409);
    }

    const demoUser = { name, email, preferredLanguage: preferredLanguage || 'en' };
    demoUsers.set(email, { ...demoUser, password });

    const token = generateDemoToken(email);
    res.status(201).json({
      success: true,
      data: { user: demoUser, token },
      mode: 'demo',
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (isDBConnected()) {
      // Use MongoDB if available
      const user = await User.findOne({ email }).select('+password');
      if (!user || !(await user.comparePassword(password))) {
        throw new AppError('Invalid email or password', 401);
      }

      const token = signToken(user._id);
      return res.json({ success: true, data: { user, token } });
    }

    // Demo mode: in-memory lookup
    const user = demoUsers.get(email);
    if (!user || user.password !== password) {
      throw new AppError('Invalid email or password', 401);
    }

    const token = generateDemoToken(email);
    const { password: _, ...userWithoutPassword } = user;
    res.json({
      success: true,
      data: { user: userWithoutPassword, token },
      mode: 'demo',
    });
  } catch (err) {
    next(err);
  }
};

export const getMe = async (req, res) => {
  res.json({ success: true, data: { user: req.user } });
};

export const registerValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('preferredLanguage').optional().isIn(['en', 'si', 'ta']),
];

export const loginValidation = [
  body('email').isEmail().withMessage('Valid email required'),
  body('password').notEmpty().withMessage('Password is required'),
];
