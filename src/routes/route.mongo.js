import Express  from "express"
import * as userController from '../controller/User.controller.mongo.js'
import * as mangaController from '../controller/Mangas.controller.mongo.js'
import * as genderController from '../controller/Gender.controller.mongo.js'
import * as kitsuController from '../controller/kitsu.controller.js'

const route = Express.Router()

export const RouterUser = () =>{
    route.post('/create_user_mongo', userController.createUser)
    route.get('/all_users_mongo', userController.listUsers)
    route.get('/user_mongo/:id', userController.findUserById)
    route.patch('/user_mongo/:id', userController.updateUser)
    route.delete('/user_mongo/:id', userController.deleteUser)

    return route
}
export const RouterManga = ()=>{
    route.post('/create_manga_mongo', mangaController.createMangas)
    route.get('/all_mangas_mongo', mangaController.listMangas)
    route.get('/manga_mongo/:id', mangaController.findMangaById)
    route.patch('/manga_mongo/:id', mangaController.updateManga)
    route.delete('/manga_mongo/:id', mangaController.deleteManga)

    return route
}
export const RouterGender = ()=>{
    route.post('/create_gender_mongo', genderController.createGender)
    route.get('/all_genders_mongo', genderController.listGenders)
    route.get('/gender_mongo/:id', genderController.findGenderById)
    route.patch('/gender_mongo/:id', genderController.updateGender)
    route.delete('/gender_mongo/:id', genderController.deleteGender)

    return route
    
}
export const RouterKitsu = () => {
    const route = Express.Router();   

    route.get('/kitsu/anime', kitsuController.getAnimeList);
    route.get('/kitsu/manga', kitsuController.getMangaList);

    return route;
}