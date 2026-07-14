import { faqs } from '../data/faqsData.js';
import { AppError } from '../middleware/errorHandler.js';

export const listFaqs = (req, res) => {
  const { q, category } = req.query;
  let results = faqs;

  if (category) {
    results = results.filter((f) => f.category === category);
  }

  if (q?.trim()) {
    const query = q.toLowerCase().trim();
    results = results.filter(
      (f) =>
        f.question.en.toLowerCase().includes(query) ||
        f.question.si.includes(q) ||
        f.question.ta.includes(q) ||
        f.answer.en.toLowerCase().includes(query)
    );
  }

  res.json({ success: true, data: { faqs: results } });
};

export const getFaq = (req, res, next) => {
  const faq = faqs.find((f) => f.id === req.params.id);
  if (!faq) return next(new AppError('FAQ not found', 404));
  res.json({ success: true, data: { faq } });
};
