import { Router } from 'express';
import { getUsuarios, crearUsuario, updateUser, deleteUser} from '../controllers/UsuariosController.js';

const router = Router();

// Definir la ruta con el verbo 
router.get('/', getUsuarios);
router.post('/', crearUsuario);
router.put('/:id' , updateUser);
router.delete('/:id', deleteUser);

export default router;