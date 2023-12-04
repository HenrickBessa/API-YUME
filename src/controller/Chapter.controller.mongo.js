import * as chapterService from '../services/Chapter.service.mongo.js';

export const createChapter = async (req, res) => {
    try {
        const { mangaId, ...chapterData } = req.body
        const chapter = await chapterService.createChapterService(mangaId, chapterData)
        res.status(201).json(chapter)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const addPageToChapter = async (req, res) => {
    const { chapterId } = req.params
    const { number, content } = req.body

    try {
        const updatedChapter = await chapterService.addPageToChapterService(chapterId, number, content)
        res.status(200).json(updatedChapter)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPageOfChapter = async (req, res) => {
    const { chapterId, pageNumber } = req.params

    try {
        const page = await chapterService.findChapterByIdService(chapterId, pageNumber)
        if (!page) {
            return res.status(404).json({ message: 'Página não encontrada' })
        }
        res.status(200).json(page)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};
