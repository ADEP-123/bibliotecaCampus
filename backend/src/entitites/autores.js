import executeQuery from "../utils/db.js";

class Autor {
    id_autor;
    nombre;
    apellido;
    nacionalidad;
    constructor(id, nombres, apellidos, origen) {
        this.id_autor = id;
        this.nombre = nombres;
        this.apellido = apellidos;
        this.nacionalidad = origen;
    }

    async getAllAutores() {
        let sql = /*sql*/`
          SELECT
          id_autor as id,
          nombre as nombres,
          apellido as apellidos,
          nacionalidad as origen
          FROM autor`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }


}


export default Autor;