import {Mangas} from '../models/Mangas.mongo.js'

export const createMangasService = (body) => Mangas.create(body);
export const findAllMangasService = () => Mangas.find();
export const findMangasByIdService = (id ) => Mangas.findById(id);
export const findMangasByIdAndRemove = (id) => Mangas.findByIdAndRemove(id);
export const updateMangasService = (id, updateData) => Mangas.findOneAndUpdate({_id: id}, updateData, { new: true });
