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

    async getLibrosPrestados(usuario) {
        let sql = /*sql*/`
          SELECT
          A.id_prestamo as id,
          A.id_usuario as idUsuario,
          CONCAT(G.nombre,' ', G.apellido) as nomUsuario,
          A.id_libro as idLibro,
          B.id_autor as idAutor,
          CONCAT(C.nombre,' ', C.apellido) as nomAutor,
          B.id_categoria as idCategoria,
          D.nombre as nomCategoria,
          B.id_editorial as idEditorial,
          E.nombre as nomEditorial,
          B.titulo as titulo,
          B.anio_publicacion as publicadoEn,
          B.isbn as isbn,
          B.num_paginas as paginas,
          B.id_estado as idEstado,
          F.nombre as nomEstadoLibro,
          A.estado as estado
          FROM prestamo A
          JOIN libro B ON A.id_libro = B.id_libro
          JOIN autor C ON B.id_autor = C.id_autor
          JOIN categoria D ON B.id_categoria = D.id_categoria
          JOIN editorial E ON B.id_editorial = E.id_editorial
          JOIN estado_libro F ON B.id_estado = F.id_estado
          JOIN usuario G on A.id_usuario = G.id_usuario
          WHERE F.nombre = "Prestado" AND CONCAT(G.nombre,' ', G.apellido) = \'${usuario}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }
}


export default Prestamo;