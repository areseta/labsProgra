import { Router } from 'express';
import {getMoviesWithCountryAndDirector, getCountriesWithDirectors , getMovieById } from '../controllers/MovieController.js';

const router = Router();

router.get('/movies-with-country-and-director', getMoviesWithCountryAndDirector );
router.get('/countries-with-directors', getCountriesWithDirectors );
router.get('/:id', getMovieById );

export default router;