import Usuario from "../entitites/usuario.js";

const getAllUsuarios = async (id, nombres, apellidos, direccion, celular, correo) => {
    const usuario = new Usuario(id, nombres, apellidos, direccion, celular, correo);
    const result = await usuario.getAllUsuarios();
    return result;
};

export {
    getAllUsuarios
}