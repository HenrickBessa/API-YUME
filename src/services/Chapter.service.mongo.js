import { Chapter } from '../models/Chapter.mongo.js';

export const createChapterService = async (mangaId, chapterData) => {
    const chapter = new Chapter({
        manga: mangaId,
        ...chapterData
    });
    await chapter.save();
    return chapter;
}

export const addPageToChapterService = async (chapterId, pageNumber, pageContent) => {
    try {
        const chapter = await Chapter.findByIdAndUpdate(
            chapterId, 
            { $push: { pages: { number: pageNumber, content: pageContent } } },
            { new: true, runValidators: true }
        )
        return chapter
    } catch (error) {
        throw error
    }
}

export const findChapterByIdService = async (chapterId, pageNumber) => {
    try {
        const chapter = await Chapter.findById(chapterId)
        if (!chapter) return null

        const page = chapter.pages.find(p => p.number === parseInt(pageNumber))
        return page || null
    } catch (error) {
        throw error
    }
}
