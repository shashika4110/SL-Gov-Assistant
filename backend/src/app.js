import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import authRoutes from './routes/authRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import servicesRoutes from './routes/servicesRoutes.js';
import mapsRoutes from './routes/mapsRoutes.js';
import speechRoutes from './routes/speechRoutes.js';
import faqRoutes from './routes/faqRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json({ limit: '1mb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { success: false, message: 'Too many requests, please try again later' },
});
app.use('/api/', limiter);

const chatLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  message: { success: false, message: 'Chat rate limit exceeded' },
});
app.use('/api/chat/message', chatLimiter);

app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    data: {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
    },
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/maps', mapsRoutes);
app.use('/api/speech', speechRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/contacts', contactRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
