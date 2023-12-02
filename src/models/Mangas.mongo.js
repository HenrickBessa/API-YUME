import mongoose from 'mongoose'

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
        type : String,
    },
})

export const Mangas = mongoose.model('Mangas', MangasSchema)


