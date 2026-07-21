import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { isDBConnected } from '../config/db.js';

export const protect = async (req, res, next) => {
  if (!isDBConnected()) {
    return res.status(503).json({ success: false, message: 'Database unavailable' });
  }

  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }

  try {
    const token = header.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'dev-jwt-secret');
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }
    req.user = user;
    next();
  } catch {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};

/** Attach user if token present, but don't require auth */
export const optionalAuth = async (req, _res, next) => {
  if (!isDBConnected()) return next();

  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) return next();

  try {
    const token = header.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'dev-jwt-secret');
    req.user = await User.findById(decoded.id);
  } catch {
    /* ignore invalid token */
  }
  next();
};

export const signToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET || 'dev-jwt-secret', {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
