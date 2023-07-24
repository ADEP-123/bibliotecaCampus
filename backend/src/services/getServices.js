import Autor from "../entitites/autores.js";
import Categoria from "../entitites/categoria.js";
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

export {
    getAllUsuariosService,
    getAllAutoresService,
    getAllCategoriasService
}