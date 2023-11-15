import express from 'express';
import GeneroController from '../controllers/generoController.js'; // Importe o controlador de gênero

const router = express.Router();

router.post('/generos', GeneroController.criarGenero);
router.get('/generos', GeneroController.listarGeneros);
router.get('/generos/:id', GeneroController.obterGeneroPorId);
router.put('/generos/:id', GeneroController.atualizarGenero);
router.delete('/generos/:id', GeneroController.excluirGenero);

export default router;
