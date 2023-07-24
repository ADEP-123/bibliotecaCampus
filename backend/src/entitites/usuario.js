import executeQuery from "../utils/db.js";

class Usuario {
    id_usuario;
    nombre;
    apellido;
    direccion;
    telefono;
    email;
    constructor(id, nombres, apellidos, direccion, celular, correo) {
        this.id_usuario = id;
        this.nombre = nombres;
        this.apellido = apellidos;
        this.direccion = direccion;
        this.telefono = celular;
        this.email = correo;
    }

    async getAllUsuarios() {
        let sql = /*sql*/`
          SELECT
          id_usuario as id,
          nombre as nombres,
          apellido as apellidos,
          direccion as direccion,
          telefono as celular,
          email as correo
          FROM usuario`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }


}


export default Usuario;