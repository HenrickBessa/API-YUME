import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
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
        "original" : ""
    },
})

export const Book = mongoose.model('Book', bookSchema)


