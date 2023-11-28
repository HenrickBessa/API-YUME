//import Express from "express";
//import livroController from "../controller/livro.controller.js";
//import UsuarioController from "../controller/usuario.controller.js";
//import generoContrtoller from "../controller/genero.controller.js";
//import kitsuController from "../controller/kitsu.controller.js";


// export const RouterBook = () => {
//     const route_book = Express.Router();
//     route_book.post("/create_book", 
//         livroController.criarLivro
//     );
//     route_book.get("/all_books",
//         livroController.listarLivros
//     );
//     route_book.get("/books/:id",
//         livroController.obterLivroPorId
//     );
//     route_book.patch("/books/:id",
//         livroController.atualizarLivro
//     );
//     route_book.delete("/books/:id", 
//         livroController.excluirLivro
//     );
//     return route_book;
// }

// export const RouterUser = () => {
//     const route_user = Express.Router();
//     route_user.post('/create_user',
//         UsuarioController.criarUsuario
//     );
//     route_user.get('/all_users',
//         UsuarioController.listarUsuarios
//     );
//     route_user.get('/user/:id', 
//         UsuarioController.obterUsuarioPorId
//     );
//     route_user.patch('/user/:id', 
//         UsuarioController.atualizarUsuario
//     );
//     route_user.delete('/user/:id', 
//         UsuarioController.excluirUsuario
//     );
//     return route_user;
// }
// export const RouterGender = () => {
//     const route_gender = Express.Router();
//     route_gender.post("/create_gender", 
//         generoContrtoller.criarGenero
//     );
//     route_gender.get("/all_genres", 
//         generoContrtoller.listarGeneros
//     );
//     route_gender.get("/gender/:id", 
//         generoContrtoller.obterGeneroPorId
//     );
//     route_gender.patch("/gender/:id", 
//         generoContrtoller.atualizarGenero
//     );
//     route_gender.delete("/gender/:id",
//         generoContrtoller.excluirGenero
//     );
//     return route_gender
// }

// export const RouterKitsu = () => {
//     const router_kitsu = Express.Router();   

//     router_kitsu.get('/kitsu/anime', kitsuController.getAnimeList);
//     router_kitsu.get('/kitsu/manga', kitsuController.getMangaList);

//     return router_kitsu;
// }

