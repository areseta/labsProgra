import { Router } from 'express';
import { getUsuarios, crearUser, updateUser, deleteUser } from '../controllers/UsuariosBDController.js';

const router = Router();

router.get('/', getUsuarios );
router.post('/', crearUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;