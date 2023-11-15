import express from 'express';
import LivroController from '../controllers/livroController.js'; // Importe o controlador de livro

const router = express.Router();

router.post('/usuarios', LivroController.criarLivro);
router.get('/usuarios', LivroController.listarLivros);
router.get('/:id', LivroController.obterLivroPorId);
router.put('/:id', LivroController.atualizarLivro);
router.delete('/:id', LivroController.excluirLivro);

export default router;
