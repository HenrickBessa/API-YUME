import { Gender } from '../models/Gender.mongo.js'

export const createGenderService = (genderData) => Gender.create(genderData)
export const findAllGendersService = () => Gender.find()
export const findGenderByIdService = (id) => Gender.findById(id)
export const findGenderByIdAndRemoveService = (id) => Gender.findByIdAndRemove(id)
export const updateGenderService = (id, updateData) => 
    Gender.findOneAndUpdate({_id: id}, updateData, { new: true })