import { Router } from 'express';
import { getDirectorsWithMovies } from '../controllers/DirectorController.js';

const router = Router();

router.get('/with-movies', getDirectorsWithMovies );

export default router;