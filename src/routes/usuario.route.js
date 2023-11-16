
import express from 'express';
import UsuarioController from '../controller/usuario.controller.js'; 
const router = express.Router();

router.post('/create_user', UsuarioController.criarUsuario);
router.get('/all_users', UsuarioController.listarUsuarios);
router.get('/user/:id', UsuarioController.obterUsuarioPorId);
router.patch('/user/:id', UsuarioController.atualizarUsuario);
router.delete('/user/:id', UsuarioController.excluirUsuario);

export default router;