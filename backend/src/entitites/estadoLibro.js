import executeQuery from "../utils/db.js";

class EstadoLibro {
    id_estado;
    nombre;
    descripcion;
    constructor(id, nombre, descripcion) {
        this.id_estado = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    async getAllEstadoLibro() {
        let sql = /*sql*/`
          SELECT
          id_estado as id,
          nombre as nombre,
          descripcion as descripcion
          FROM estado_libro`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }


}


export default EstadoLibro;