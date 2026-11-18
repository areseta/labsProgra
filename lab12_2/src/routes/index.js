
import { Router } from 'express';
import userRouter from './UsuariosRoutes.js';
import userBDRouter from './UsuariosBDRoutes.js';
import cineBDRouter from './CineBDRoutes.js';
import countryRouter from './CountryRoutes.js';
import directorRouter from './DirectorRoutes.js';
import movieRouter from './MovieRoutes.js';

const mainRouter = Router();

// Registrar la ruta de usuarios
mainRouter.use('/users',userRouter);

// Registrar otras rutas ...
mainRouter.use('/usersbd',userBDRouter);
mainRouter.use('/cinebd',cineBDRouter);

// Registrar la ruta de países
mainRouter.use('/countries',countryRouter);
// Registrar la ruta de directores
mainRouter.use('/directors',directorRouter);
// Registrar la ruta de películas
mainRouter.use('/movies',movieRouter);

export default mainRouter;

