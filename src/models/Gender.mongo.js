import mongoose from 'mongoose'

const genderSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  }
})

export const Gender = mongoose.model('Gender', genderSchema)