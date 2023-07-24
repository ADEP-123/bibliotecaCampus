import { Router } from "express";
import { getUsuariosController } from "../controllers/getDataController.js";


const getInitRoute = () => {
    const router = Router()
    router.get("/usuario", getUsuariosController)

    return router;
};

export default getInitRoute