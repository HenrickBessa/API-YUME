import {User} from '../models/User.mongo.js'

export const createService = (body) => User.create(body);
export const findAllService = () => User.find();
export const findByIdService = (id) => User.findById(id);
export const findByIdAndDelete = (id) => User.findByIdAndDelete(id);
export const updateService = (id, updateData) => 
    User.findOneAndUpdate({_id: id}, updateData, { new: true });