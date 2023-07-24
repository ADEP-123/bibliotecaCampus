import executeQuery from "../utils/db.js";

class Editorial {
    id_editorial;
    nombre;
    direccion;
    telefono;
    constructor(id, nombre, ubicacion, telefono) {
        this.id_editorial = id;
        this.nombre = nombre;
        this.direccion = ubicacion;
        this.telefono = telefono;
    }

    async getAllEditoriales() {
        let sql = /*sql*/`
          SELECT
          id_editorial as id,
          nombre as nombres,
          direccion as ubicacion,
          telefono as telefono
          FROM editorial`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }


}


export default Editorial;