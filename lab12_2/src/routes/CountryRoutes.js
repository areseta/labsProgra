import { Router } from 'express';
import { getMoviesByCountry, getDirectorsByCountry , getCountriesWithDirectorAndMovieCounts } from '../controllers/CountryController.js';
const router = Router();

router.get('/movies', getMoviesByCountry );
router.get('/directors', getDirectorsByCountry );
router.get('/reports/director-movie-counts/:id', getCountriesWithDirectorAndMovieCounts );

export default router;