import {Book} from '../models/Book.mongo.js'

export const createLivroService = (body) => Book.create(body);
export const findAllLivrosService = () => Book.find();
export const findLivroByIdService = (id) => Book.findById(id);
export const findLivroByIdAndRemove = (id) => Book.findByIdAndRemove(id);
export const updateLivroService = (id, updateData) => 
    Book.findOneAndUpdate({_id: id}, updateData, { new: true });
