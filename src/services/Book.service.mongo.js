import {Book} from '../models/Book.mongo.js'

export const createBookService = (body) => Book.create(body);
export const findAllBooksService = () => Book.find();
export const findBookByIdService = (id) => Book.findById(id);
export const findBookByIdAndRemove = (id) => Book.findByIdAndRemove(id);
export const updateBookService = (id, updateData) => 
    Book.findOneAndUpdate({_id: id}, updateData, { new: true });
