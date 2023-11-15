import express from 'express';
import axios from 'axios';

const router = express.Router();
const apiBaseUrl = 'https://-yume.cyclic.app/usuarios';

// Criar usuário
router.post('/', async (req, res) => {
    try {
        const response = await axios.post(apiBaseUrl, req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao criar usuário:', error.message);
        res.status(500).send('Erro ao criar usuário');
    }
});

// Listar usuários
router.get('/', async (req, res) => {
    try {
        const response = await axios.get(apiBaseUrl);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao listar usuários:', error.message);
        res.status(500).send('Erro ao listar usuários');
    }
});

// Obter usuário por ID
router.get('/:id', async (req, res) => {
    try {
        const response = await axios.get(`${apiBaseUrl}/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao obter usuário:', error.message);
        res.status(500).send('Erro ao obter usuário');
    }
});

// Atualizar usuário
router.patch('/:id', async (req, res) => {
    try {
        const response = await axios.patch(`${apiBaseUrl}/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error.message);
        res.status(500).send('Erro ao atualizar usuário');
    }
});

// Excluir usuário
router.delete('/:id', async (req, res) => {
    try {
        const response = await axios.delete(`${apiBaseUrl}/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao excluir usuário:', error.message);
        res.status(500).send('Erro ao excluir usuário');
    }
});

export default router;
