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
          estado as estado
          FROM prestamo`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async getPrestamoByUsuario(usuario) {
        let sql = /*sql*/`
          SELECT
          A.id_prestamo as id,
          A.id_usuario as idUsuario,
          CONCAT(B.nombre,' ', B.apellido) as nomUsuario,
          A.id_libro as idLibro,
          A.fecha_prestamo as fechaPrestamo,
          A.fecha_devolucion as fechaDevolucion,
          A.estado as estado
          FROM prestamo A
          JOIN usuario B ON A.id_usuario = B.id_usuario
          WHERE CONCAT(B.nombre,' ', B.apellido) = \'${usuario}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }
}


export default Prestamo;