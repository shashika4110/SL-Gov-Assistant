import { Router } from 'express';
import { listFaqs, getFaq } from '../controllers/faqController.js';

const router = Router();

router.get('/', listFaqs);
router.get('/:id', getFaq);

export default router;
