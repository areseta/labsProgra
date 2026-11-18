import { Router } from 'express';

import userRouter from './UsuariosRoutes.js';
import userDBRouter from './UsuariosDBRoutes.js';

const mainRouter = Router();

// Registrar la ruta de los usuarios
mainRouter.use('/users', userRouter)
mainRouter.use('/usersdb', userDBRouter)

// ... registrar otras rutas
//mainRouter.use('/xyz', xyzRouter)

export default mainRouter;


