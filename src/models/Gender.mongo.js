import mongoose from 'mongoose'

const genderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  descrition: {
    type: String,
    required: true
  }
})

export const Gender = mongoose.model('Gender', genderSchema)