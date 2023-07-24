import Autor from "../entitites/autores.js";
import Usuario from "../entitites/usuario.js";

const getAllUsuarios = async () => {
    const usuario = new Usuario();
    const result = await usuario.getAllUsuarios();
    return result;
};

const getAllAutores = async () => {
    const autor = new Autor();
    const result = await autor.getAllAutores();
    return result;
};

export {
    getAllUsuarios,
    getAllAutores
}