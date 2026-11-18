import { Router } from 'express';
import { country_directors, directors } from '../controllers/CineBDController.js';

const router = Router();

router.get('/sql1', country_directors );
router.get('/sql2', directors);

export default router;
