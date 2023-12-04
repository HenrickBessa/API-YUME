import mongoose from "mongoose";
const { Schema } = mongoose;

const PageSchema = new Schema({
    number: Number,
    content: String
});

const ChapterSchema = new Schema({
    manga: {
        type: Schema.Types.ObjectId,
        ref: 'Mangas', 
        required: true
    },
    title: {
        type: String,
        required: true
    },
    pages: [PageSchema]
}, { timestamps: true });

export const Chapter = mongoose.model('Chapter', ChapterSchema);
