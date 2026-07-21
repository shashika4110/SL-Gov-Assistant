import { Router } from 'express';
import { listOffices, nearbyOffices, getMapsConfig } from '../controllers/mapsController.js';

const router = Router();

router.get('/config', getMapsConfig);
router.get('/offices', listOffices);
router.get('/offices/nearby', nearbyOffices);

export default router;
