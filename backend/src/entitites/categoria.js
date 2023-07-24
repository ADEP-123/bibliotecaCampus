import executeQuery from "../utils/db.js";

class Categoria {
    id_categoria;
    nombre;
    constructor(id, nombre) {
        this.id_categoria = id;
        this.nombre = nombre;
    }

    async getAllCategorias() {
        let sql = /*sql*/`
          SELECT
          id_categoria as id,
          nombre as nombre
          FROM categoria`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }


}


export default Categoria;