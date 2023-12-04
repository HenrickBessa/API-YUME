import Express  from "express"
import * as userController from '../controller/User.controller.mongo.js'
import * as mangaController from '../controller/Mangas.controller.mongo.js'
import * as genderController from '../controller/Gender.controller.mongo.js'
import * as kitsuController from '../controller/kitsu.controller.js'
import * as chapterController from '../controller/Chapter.controller.mongo.js'

export const RouterUser = () =>{
    const route = Express.Router()
    route.post('/create_user_mongo', userController.createUser)
    route.post('/create_chapter_mongo', mangaController.createChapter)
    route.get('/all_users_mongo', userController.listUsers)
    route.get('/user_mongo/:id', userController.findUserById)
    route.patch('/user_mongo/:id', userController.updateUser)
    route.delete('/user_mongo/:id', userController.deleteUser)
    return route
}
export const RouterChapter = ()=>{
    const route = Express.Router()
    route.get('/chapter_page/:chapterId/:pageNumber', chapterController.getPageOfChapter)
    route.get('/chapter_pages/:chapterId', chapterController.getPageOfChapter)
    route.post('/add_page_to_chapter', chapterController.addPageToChapter)

    return route
}
export const RouterManga = ()=>{
    const route = Express.Router()
    route.post('/create_manga_mongo', mangaController.createMangas)
    route.get('/all_mangas_mongo', mangaController.listMangas)
    route.get('/manga_mongo/:id', mangaController.findMangaById)
    route.patch('/manga_mongo/:id', mangaController.updateManga)
    route.delete('/manga_mongo/:id', mangaController.deleteManga)
    return route
}
export const RouterGender = ()=>{
    const route = Express.Router()
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