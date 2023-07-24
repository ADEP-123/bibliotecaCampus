import executeQuery from "../utils/db.js";

class Prestamo {
    id_prestamo;
    id_usuario;
    id_libro;
    fecha_prestamo;
    fecha_devolucion;
    estado;
    constructor(id, idUsuario, idLibro, fechaPrestamo, fechaDevolucion, estado) {
        this.id_prestamo = id;
        this.id_usuario = idUsuario;
        this.id_libro = idLibro;
        this.fecha_prestamo = fechaPrestamo;
        this.fecha_devolucion = fechaDevolucion;
        this.estado = estado;
    }

    async getAllPrestamos() {
        let sql = /*sql*/`
          SELECT
          id_prestamo as id,
          id_usuario as idUsuario,
          id_libro as idLibro,
          fecha_prestamo as fechaPrestamo,
          fecha_devolucion as fechaDevolucion,
          estado as estado,
          FROM presatmo`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }


}


export default Prestamo;