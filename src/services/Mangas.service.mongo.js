import {Mangas} from '../models/Mangas.mongo.js'

export const createMangasService = (body) => Mangas.create(body);
export const findAllMangasService = () => Mangas.find();
export const findMangasByIdService = (id ) => Mangas.findById(id);
export const findMangasByIdAndDelete = (id) => Mangas.findOneAndDelete(id);
export const updateMangasService = async (id, updateData) => 
    Mangas.findOneAndUpdate({_id: id}, updateData, {new: true})
