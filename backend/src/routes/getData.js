import { Router } from "express";
import { getAutoresController, getCategoriaController, getEditorialController, getEstadoLibroController, getUsuariosController } from "../controllers/getDataController.js";


const getInitRoute = () => {
    const router = Router()
    router.get("/usuario", getUsuariosController)
    router.get("/autores", getAutoresController)
    router.get("/categorias", getCategoriaController)
    router.get("/editoriales", getEditorialController)
    router.get("/estadoLibros", getEstadoLibroController)

    return router;
};

export default getInitRoute