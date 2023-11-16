import Express from "express";
import livroController from "../controller/livro.controller.js";

const router = Express.Router();

router.post("/create_book", livroController.criarLivro);
router.get("/all_books", livroController.listarLivros);
router.get("/books/:id", livroController.obterLivroPorId);
router.patch("/books/:id", livroController.atualizarLivro);
router.delete("/books/:id", livroController.excluirLivro);

export default router;