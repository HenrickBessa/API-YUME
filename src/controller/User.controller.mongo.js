import * as userService from '../services/User.service.mongo.js';
import mongoose from 'mongoose';

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
    const {name, password, email, phone} = req.body
    console.log(name, password, email, phone)
    if(!name && !password && !email && !phone){
      res.status(400).send(
        {message: "Submeter algo para atualização"
      })
    }
    const id = req.params.id
    console.log(id)
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).send(
        {message: "Invalid ID"
      })
    }
    
    const user = await userService.updateService(id, req.body);
    if (!user) {
      res.status(404).json(
        { message: 'Usuário não encontrado'
       });
      return;
    }
    res.status(200).json(user).end()
  } catch (error) {
    res.status(500).json(
      { 
        error: error.message 
      });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const user = await userService.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).json(
        { 
          message: 'Usuário não encontrado' 
        });
      return;
    }
    res.status(200).json(
      { message: 'Usuário excluído com sucesso' 
    }).end()
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
