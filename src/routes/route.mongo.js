import Express  from "express"
import * as userController from '../controller/User.controller.mongo.js'
import * as bookController from '../controller/Book.controller.mongo.js'
import * as genderController from '../controller/Gender.controller.mongo.js'
const route = Express.Router()
export const RouterUser = () =>{
    

    route.post('/create_user_mongo', userController.createUser)
    route.get('/all_users_mongo', userController.listUsers)
    route.get('/user_mongo/:id', userController.findUserById)
    route.patch('/user_mongo/:id', userController.updateUser)
    route.delete('/user_mongo/:id', userController.deleteUser)

    return route
}
export const RouterBook = ()=>{
    route.post('/create_book_mongo', bookController.createBook)
    route.get('/all_books_mongo', bookController.listBooks)
    route.get('/book_mongo/:id', bookController.findBookById)
    route.patch('/book_mongo/:id', bookController.updateBook)
    route.delete('book_mongo/:id', bookController.deleteBook)

    return route
}
export const RouterGender = ()=>{
    route.post('/create_gender_mongo', genderController.createGender)
    route.get('/all_genders_mongo', genderController.listGenders)
    route.get('/gender_mongo/:id', genderController.findGenderById)
    route.patch('/gender_mongo/:id', genderController.updateGender)
    route.delete('gender_mongo/:id', genderController.deleteGender)

    return route
    
}