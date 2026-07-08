import { Router } from 'express'
import { usuarioController } from '../controllers/usuarioController'
import { validarUsuario } from '../middlewares/validarUsuario'

const router = Router()

router.get('/', usuarioController.listarTodos)
router.get('/:id', usuarioController.buscarPorId)
router.post('/', validarUsuario, usuarioController.criar)
router.put('/:id', validarUsuario, usuarioController.atualizar)
router.patch('/:id', usuarioController.atualizar)
router.delete('/:id', usuarioController.deletar)

export default router