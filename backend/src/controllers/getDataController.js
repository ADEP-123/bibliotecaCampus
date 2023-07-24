import { getAllAutoresService, getAllCategoriasService, getAllEditorialesService, getAllEstadoLibrosService, getAllLibrosService, getAllPrestamoService, getAllReservaService, getAllUsuariosService, getLibrosDisponiblesService, getLibrosPorAutorService, getLibrosPorCategoriaService, getLibrosPorPaginasService, getLibrosPrestadosService, getPrestamoByUsuarioService } from "../services/getServices.js";


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
        const { estado, autor, categoria, paginas } = req.query
        let result
        if (autor) {
            result = await getLibrosPorAutorService(autor);
        }
        if (categoria) {
            result = await getLibrosPorCategoriaService(categoria);
        }
        if (estado) {
            switch (estado) {
                case "Disponible":
                    result = await getLibrosDisponiblesService();
                    break;

                case "Prestado":
                    result = await getLibrosPrestadosService();
                    break;
            }
        }
        if (paginas) {
            result = await getLibrosPorPaginasService(paginas);
        }
        if (!estado && !autor && !categoria && !paginas) {
            result = await getAllLibrosService();
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};


const getPrestamoController = async (req, res, next) => {
    try {
        const { usuario, estado } = req.query
        let result;
        if (usuario && !estado) {
            result = await getPrestamoByUsuarioService(usuario)
        }
        if (!usuario && !estado) {
            result = await getAllPrestamoService()
        }
        if (usuario && estado == "Prestado") {
            result = await getLibrosPrestadosService(usuario)
        }
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