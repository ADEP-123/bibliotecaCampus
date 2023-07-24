import Autor from "../entitites/autores.js";
import Categoria from "../entitites/categoria.js";
import Editorial from "../entitites/editorial.js";
import EstadoLibro from "../entitites/estadoLibro.js";
import Libro from "../entitites/libro.js";
import Prestamo from "../entitites/presamo.js";
import Usuario from "../entitites/usuario.js";

const getAllUsuariosService = async () => {
    const usuario = new Usuario();
    const result = await usuario.getAllUsuarios();
    return result;
};

const getAllAutoresService = async () => {
    const autor = new Autor();
    const result = await autor.getAllAutores();
    return result;
};

const getAllCategoriasService = async () => {
    const categoria = new Categoria();
    const result = await categoria.getAllCategorias();
    return result;
};

const getAllEditorialesService = async () => {
    const editorial = new Editorial();
    const result = await editorial.getAllEditoriales();
    return result;
};

const getAllEstadoLibrosService = async () => {
    const estadoLibro = new EstadoLibro();
    const result = await estadoLibro.getAllEstadoLibro();
    return result;
};

const getAllLibrosService = async () => {
    const libro = new Libro();
    const result = await libro.getAllLibros();
    return result;
};

const getAllPrestamoService = async () => {
    const prestamo = new Prestamo();
    const result = await prestamo.getAllPrestamos();
    return result;
};

export {
    getAllUsuariosService,
    getAllAutoresService,
    getAllCategoriasService,
    getAllEditorialesService,
    getAllEstadoLibrosService,
    getAllLibrosService,
    getAllPrestamoService
}