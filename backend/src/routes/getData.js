import { Router } from "express";
import { getAutoresController, getCategoriaController, getEditorialController, getEstadoLibroController, getLibroController, getUsuariosController } from "../controllers/getDataController.js";


const getInitRoute = () => {
    const router = Router()
    router.get("/usuario", getUsuariosController)
    router.get("/autores", getAutoresController)
    router.get("/categorias", getCategoriaController)
    router.get("/editoriales", getEditorialController)
    router.get("/estadoLibros", getEstadoLibroController)
    router.get("/libros", getLibroController)

    return router;
};

export default getInitRoute