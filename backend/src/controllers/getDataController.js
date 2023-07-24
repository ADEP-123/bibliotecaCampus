import { getAllAutores, getAllUsuarios } from "../services/getServices.js";


const getUsuariosController = async (req, res, next) => {
    try {
        const { } = req.query
        const result = await getAllUsuarios();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const getAutoresController = async (req, res, next) => {
    try {
        const { } = req.query
        const result = await getAllAutores();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    getUsuariosController,
    getAutoresController
}