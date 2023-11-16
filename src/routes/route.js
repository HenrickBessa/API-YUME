import Express from "express";
import livroController from "../controller/livro.controller.js";
import UsuarioController from "../controller/usuario.controller.js";
import generoContrtoller from "../controller/genero.controller.js";
import kitsuController from "../controller/kitsu.controller.js";


const router = Express.Router();


const RouterBook = () => {
    const route_book = router;
    router.post("/create_book", livroController.criarLivro);
    router.get("/all_books", livroController.listarLivros);
    router.get("/books/:id", livroController.obterLivroPorId);
    router.patch("/books/:id", livroController.atualizarLivro);
    router.delete("/books/:id", livroController.excluirLivro);
    return route_book;
}

const RouterUser = () => {
    const route_user = router;
    router.post('/create_user', UsuarioController.criarUsuario);
    router.get('/all_users', UsuarioController.listarUsuarios);
    router.get('/user/:id', UsuarioController.obterUsuarioPorId);
    router.patch('/user/:id', UsuarioController.atualizarUsuario);
    router.delete('/user/:id', UsuarioController.excluirUsuario);
    return route_user;
}
const RouterGender = () => {
    const route_gender = router;
    router.post("/create_gender", generoContrtoller.criarGenero);
    router.get("/all_genres", generoContrtoller.listarGeneros);
    router.get("/gender/:id", generoContrtoller.obterGeneroPorId);
    router.patch("/gender/:id", generoContrtoller.atualizarGenero);
    router.delete("/gender/:id", generoContrtoller.excluirGenero);
    return route_gender
}

const RouterKitsu = () => {

    const router = Express.Router();   

    router.get('/kitsu/anime', kitsuController.getAnimeList);
    router.get('/kitsu/manga', kitsuController.getMangaList);
}

export default {
    RouterBook,
    RouterUser,
    RouterGender,
    RouterKitsu
};