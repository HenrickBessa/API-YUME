import * as bookService from '../services/Book.service.mongo.js';

export const createBook = async (req, res) => {
  try {
    const book = await bookService.createLivroService(req.body);
    console.log('Create Book')
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const listBooks = async (req, res) => {
  try {
    const books = await bookService.findAllLivrosService();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const findBookById = async (req, res) => {
  try {
    const book = await bookService.findLivroByIdService(req.params.id);
    if (!book) {
      res.status(404).json({ message: 'Livro não encontrado' });
      return;
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const book = await bookService.updateLivroService(req.params.id, req.body);
    if (!book) {
      res.status(404).json({ message: 'Livro não encontrado' });
      return;
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const book = await bookService.findLivroByIdAndRemove(req.params.id);
    if (!book) {
      res.status(404).json({ message: 'Livro não encontrado' });
      return;
    }
    res.status(200).json({ message: 'Livro excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
