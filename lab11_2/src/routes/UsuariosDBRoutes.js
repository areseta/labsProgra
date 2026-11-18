import { Router } from 'express';
import { getUsuarios, createUser, updateUser, deleteUser} from '../controllers/UsuariosDBController.js';

const router = Router();

// Definir la ruta con el verbo 
router.get('/', getUsuarios);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


export default router;