import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    anoPublicacao: {
        type: String,
        required: true
    },
})

export const Book = mongoose.model('Book', bookSchema)


