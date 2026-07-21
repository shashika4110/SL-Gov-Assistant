import { governmentServices } from '../services/knowledgeBase.js';
import { AppError } from '../middleware/errorHandler.js';

export const listServices = (_req, res) => {
  res.json({ success: true, data: { services: governmentServices } });
};

export const getService = (req, res, next) => {
  const service = governmentServices.find((s) => s.id === req.params.id);
  if (!service) return next(new AppError('Service not found', 404));
  res.json({ success: true, data: { service } });
};

export const searchServices = (req, res) => {
  const q = (req.query.q || '').toLowerCase().trim();
  if (!q) return res.json({ success: true, data: { services: governmentServices } });

  const results = governmentServices.filter(
    (s) =>
      s.id.includes(q) ||
      s.keywords?.some((k) => k.toLowerCase().includes(q)) ||
      s.title.en.toLowerCase().includes(q)
  );

  res.json({ success: true, data: { services: results } });
};
