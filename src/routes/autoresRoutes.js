import express  from "express";
import AutorControler from "../controllers/autorControler.js";


const router = express.Router();

router
    .get("/autores", AutorControler.listarAutores)
    .get("/autores/:id", AutorControler.listarAutoresPorId)
    .post("/autores", AutorControler.cadastrarAutor)
    .put("/autores/:id", AutorControler.atualizarAutor)
    .delete("/autores/:id", AutorControler.excluirAutor)

export default router