import { Router } from "express";
import { getAutoresController, getUsuariosController } from "../controllers/getDataController.js";


const getInitRoute = () => {
    const router = Router()
    router.get("/usuario", getUsuariosController)
    router.get("/autores", getAutoresController)

    return router;
};

export default getInitRoute