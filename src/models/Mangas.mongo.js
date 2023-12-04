import mongoose from "mongoose"

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
    chapters: [
        {
            title:{
                type: String,
                required: true
            },
            number:{
                type: Number,
                required: true
            },
            content:{
                type: String,
                required: true
            }
        }
    ]
});

export const Mangas = mongoose.model('Mangas', MangasSchema);
