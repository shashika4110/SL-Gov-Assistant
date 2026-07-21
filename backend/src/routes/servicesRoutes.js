import { Router } from 'express';
import { listServices, getService, searchServices } from '../controllers/servicesController.js';

const router = Router();

router.get('/', listServices);
router.get('/search', searchServices);
router.get('/:id', getService);

export default router;
