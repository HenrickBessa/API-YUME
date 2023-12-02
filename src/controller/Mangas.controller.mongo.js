import * as mangaService from '../services/Mangas.service.mongo.js'
import mongoose from 'mongoose'

export const createMangas = async (req, res) => {
  console.log(req.body)
  try {
    const mangas = await mangaService.createMangasService(req.body)
    console.log('Create Manga')
    res.status(201).json(mangas).end()
  } catch (error) {
    res.status(400).json({ error: error.message })
    console.log(res.body)
  }
}

export const listMangas = async (req, res) => {
  try {
    const mangas = await mangaService.findAllMangasService()
    res.status(200).json(mangas).end()
    console.log(mangas)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const findMangaById = async (req, res) => {
  try {
    const manga = await mangaService.findMangasByIdService(req.params.id);
    if (!manga) {
      res.status(404).json({ message: 'Manga não encontrado' });
      return;
    }
    res.status(200).json(manga).end()
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateManga = async (req, res) => {
  try {
    console.log(req.params.id)
    const {title, synopsis, coverImage} = req.body
    console.log(title, synopsis, coverImage)
    if(!title && !synopsis && !coverImage){
      res.status(400).send(
        {
          message : "Subeter algo para atualização"
        }
      )
    }
    const id = req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).send(
        {
          message : "Invalid ID"
        }
      )
    }
    const manga = await mangaService.updateMangasService(req.params.id, req.body);
    if (!manga) {
      res.status(404).json({ message: 'Manga não encontrado' }).end()
      return;
    }
    res.status(200).json(manga).end()
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteManga= async (req, res) => {
  try {
    const manga = await mangaService.findMangasByIdAndDelete(req.params.id);
    if (!manga) {
      res.status(404).json({ message: 'Manga não encontrado' });
      return;
    }
    res.status(200).json({ message: 'Manga excluído com sucesso' }).end()
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
