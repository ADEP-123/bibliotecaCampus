import { Router } from "express";
import { getAutoresController, getCategoriaController, getEditorialController, getEstadoLibroController, getLibroController, getReservaController, getUsuariosController } from "../controllers/getDataController.js";


const getInitRoute = () => {
    const router = Router()
    router.get("/usuario", getUsuariosController)
    router.get("/autores", getAutoresController)
    router.get("/categorias", getCategoriaController)
    router.get("/editoriales", getEditorialController)
    router.get("/estadoLibros", getEstadoLibroController)
    router.get("/libros", getLibroController)
    router.get("/prestamos", getLibroController)
    router.get("/reservas", getReservaController)

    return router;
};

export default getInitRoute