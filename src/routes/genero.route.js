import Express from "express";
import generoContrtoller from "../controller/genero.controller.js";

const router = Express.Router();

router.post("/create_gender", generoContrtoller.criarGenero);
router.get("/all_genres", generoContrtoller.listarGeneros);
router.get("/gender/:id", generoContrtoller.obterGeneroPorId);
router.patch("/gender/:id", generoContrtoller.atualizarGenero);
router.delete("/gender/:id", generoContrtoller.excluirGenero);

export default router;