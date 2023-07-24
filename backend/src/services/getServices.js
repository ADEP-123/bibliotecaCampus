import Autor from "../entitites/autores.js";
import Categoria from "../entitites/categoria.js";
import Editorial from "../entitites/editorial.js";
import EstadoLibro from "../entitites/estadoLibro.js";
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

export {
    getAllUsuariosService,
    getAllAutoresService,
    getAllCategoriasService,
    getAllEditorialesService,
    getAllEstadoLibrosService
}