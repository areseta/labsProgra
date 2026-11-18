import { Router } from 'express';
import { getUsuarios, crearUser , updateUser, deleteUser} from '../controllers/UsuariosController.js';

const router = Router();

router.get('/', getUsuarios );
router.post('/', crearUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;