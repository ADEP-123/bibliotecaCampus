import { getAllAutoresService, getAllCategoriasService, getAllEditorialesService, getAllEstadoLibrosService, getAllLibrosService, getAllPrestamoService, getAllReservaService, getAllUsuariosService } from "../services/getServices.js";


const getUsuariosController = async (req, res, next) => {
    try {
        const { } = req.query
        const result = await getAllUsuariosService();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const getAutoresController = async (req, res, next) => {
    try {
        const { } = req.query
        const result = await getAllAutoresService();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const getCategoriaController = async (req, res, next) => {
    try {
        const { } = req.query
        const result = await getAllCategoriasService();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const getEditorialController = async (req, res, next) => {
    try {
        const { } = req.query
        const result = await getAllEditorialesService();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const getEstadoLibroController = async (req, res, next) => {
    try {
        const { } = req.query
        const result = await getAllEstadoLibrosService();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};


const getLibroController = async (req, res, next) => {
    try {
        const { } = req.query
        const result = await getAllLibrosService();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const getPrestamoController = async (req, res, next) => {
    try {
        const { } = req.query
        const result = await getAllPrestamoService();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

const getReservaController = async (req, res, next) => {
    try {
        const { } = req.query
        const result = await getAllReservaService();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    getUsuariosController,
    getAutoresController,
    getCategoriaController,
    getEditorialController,
    getEstadoLibroController,
    getLibroController,
    getPrestamoController,
    getReservaController
}