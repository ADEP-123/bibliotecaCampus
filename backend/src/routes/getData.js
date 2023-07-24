import { Router } from "express";
import { getAutoresController, getCategoriaController, getUsuariosController } from "../controllers/getDataController.js";


const getInitRoute = () => {
    const router = Router()
    router.get("/usuario", getUsuariosController)
    router.get("/autores", getAutoresController)
    router.get("/categorias", getCategoriaController)

    return router;
};

export default getInitRoute