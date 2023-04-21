import express  from "express";
import LivroControler from "../controllers/livroControler.js";


const router = express.Router();

router
    .get("/livros", LivroControler.listarLivros)
    .get("/livros/busca", LivroControler.listarLivroPorEditora)
    .get("/livros/:id", LivroControler.listarLivrosPorId)
    .post("/livros", LivroControler.cadastrarLivro)
    .put("/livros/:id", LivroControler.atualizarLivro)
    .delete("/livros/:id", LivroControler.excluirLivro)

export default router
