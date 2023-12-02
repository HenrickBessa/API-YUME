import * as userService from '../services/User.service.mongo.js';


export const createUser = async (req, res) => {
  try {
    const user = await userService.createService(req.body);
    console.log('Create User')
    res.status(201).json(user).end()
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const listUsers = async (req, res) => {
  try {
    const users = await userService.findAllService();

    res.status(200).json(users).end()
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const findUserById = async (req, res) => {
  try {
    const user = await userService.findByIdService(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'Usuário não encontrado' });
      return;
    }
    res.status(200).json(user).end()
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateUser = async (req, res) => {
  try {
    console.log(req.params.id)
    const user = await userService.updateService(req.params.id, req.body);
    if (!user) {
      res.status(404).json({ message: 'Usuário não encontrado' });
      return;
    }
    res.status(200).json(user).end()
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const user = await userService.findByIdAndRemove(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'Usuário não encontrado' });
      return;
    }
    res.status(200).json({ message: 'Usuário excluído com sucesso' }).end()
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
