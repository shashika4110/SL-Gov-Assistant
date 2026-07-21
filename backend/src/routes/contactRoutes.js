import { Router } from 'express';
import { listContacts, listEmergencyContacts } from '../controllers/contactController.js';

const router = Router();

router.get('/', listContacts);
router.get('/emergency', listEmergencyContacts);

export default router;
