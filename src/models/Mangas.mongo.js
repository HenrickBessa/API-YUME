import mongoose from "mongoose"

const ChapterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    pages:{
        number: Number,
        content: String
    }
});

const MangasSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    chapters: [ChapterSchema]
});

export const Mangas = mongoose.model('Mangas', MangasSchema);
