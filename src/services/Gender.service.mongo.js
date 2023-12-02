import { Gender } from '../models/Gender.mongo.js'

export const createGenderService = (genderData) => Gender.create(genderData)
export const findAllGendersService = () => Gender.find()
export const findGenderByIdService = (id) => Gender.findById(id)
export const findGenderByIdAndDeleteService = (id) => Gender.findByIdAndDelete(id)
export const updateGenderService = (id, updateData) => 
    Gender.findOneAndUpdate({_id: id}, updateData, { new: true })