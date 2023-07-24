import executeQuery from "../utils/db.js";

class Libro {
    id_libro;
    id_autor;
    id_categoria;
    id_editorial;
    titulo
    anio_publicacion;
    isbn;
    num_paginas;
    id_estado;
    constructor(id, idAutor, idCategoria, idEditorial, titulo, publicadoEn, isbn, paginas, idEstado) {
        this.id_libro = id;
        this.id_autor = idAutor;
        this.id_categoria = idCategoria;
        this.id_editorial = idEditorial;
        this.titulo = titulo;
        this.anio_publicacion = publicadoEn;
        this.isbn = isbn;
        this.num_paginas = paginas;
        this.id_estado = idEstado;
    }

    async getAllLibros() {
        let sql = /*sql*/`
          SELECT
          A.id_libro as id,
          A.id_autor as idAutor,
          CONCAT(B.nombre,' ', B.apellido) as nomAutor,
          A.id_categoria as idCategoria,
          C.nombre as nomCategoria,
          A.id_editorial as idEditorial,
          D.nombre as nomEditorial,
          A.titulo as titulo,
          A.anio_publicacion as publicadoEn,
          A.isbn as isbn,
          A.num_paginas as paginas,
          A.id_estado as idEstado,
          E.nombre as nomEstadoLibro
          FROM libro A
          JOIN autor B ON A.id_autor = B.id_autor
          JOIN categoria C ON A.id_categoria = C.id_categoria
          JOIN editorial D ON A.id_editorial = D.id_editorial
          JOIN estado_libro E ON A.id_estado = E.id_estado`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async getLibrosDisponibles() {
        let sql = /*sql*/`
          SELECT
          A.id_libro as id,
          A.id_autor as idAutor,
          CONCAT(B.nombre,' ', B.apellido) as nomAutor,
          A.id_categoria as idCategoria,
          C.nombre as nomCategoria,
          A.id_editorial as idEditorial,
          D.nombre as nomEditorial,
          A.titulo as titulo,
          A.anio_publicacion as publicadoEn,
          A.isbn as isbn,
          A.num_paginas as paginas,
          A.id_estado as idEstado,
          E.nombre as nomEstadoLibro
          FROM libro A
          JOIN autor B ON A.id_autor = B.id_autor
          JOIN categoria C ON A.id_categoria = C.id_categoria
          JOIN editorial D ON A.id_editorial = D.id_editorial
          JOIN estado_libro E ON A.id_estado = E.id_estado
          WHERE E.nombre = "Disponible"`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async getLibrosPrestados() {
        let sql = /*sql*/`
          SELECT
          A.id_prestamo as id,
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
          A.fecha_devolucion as fechaDevolucion
          FROM prestamo A
          JOIN libro B ON A.id_libro = B.id_libro
          JOIN autor C ON B.id_autor = C.id_autor
          JOIN categoria D ON B.id_categoria = D.id_categoria
          JOIN editorial E ON B.id_editorial = E.id_editorial
          JOIN estado_libro F ON B.id_estado = F.id_estado
          WHERE F.nombre = "Prestado"`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async getlibrosPorAutor(autor) {
        let sql = /*sql*/`
          SELECT
          A.id_libro as id,
          A.id_autor as idAutor,
          CONCAT(B.nombre,' ', B.apellido) as nomAutor,
          A.id_categoria as idCategoria,
          C.nombre as nomCategoria,
          A.id_editorial as idEditorial,
          D.nombre as nomEditorial,
          A.titulo as titulo,
          A.anio_publicacion as publicadoEn,
          A.isbn as isbn,
          A.num_paginas as paginas,
          A.id_estado as idEstado,
          E.nombre as nomEstadoLibro
          FROM libro A
          JOIN autor B ON A.id_autor = B.id_autor
          JOIN categoria C ON A.id_categoria = C.id_categoria
          JOIN editorial D ON A.id_editorial = D.id_editorial
          JOIN estado_libro E ON A.id_estado = E.id_estado
          WHERE CONCAT(B.nombre,' ',B.apellido) = \'${autor}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async getlibrosPorCategoria(categoria) {
        let sql = /*sql*/`
          SELECT
          A.id_libro as id,
          A.id_autor as idAutor,
          CONCAT(B.nombre,' ', B.apellido) as nomAutor,
          A.id_categoria as idCategoria,
          C.nombre as nomCategoria,
          A.id_editorial as idEditorial,
          D.nombre as nomEditorial,
          A.titulo as titulo,
          A.anio_publicacion as publicadoEn,
          A.isbn as isbn,
          A.num_paginas as paginas,
          A.id_estado as idEstado,
          E.nombre as nomEstadoLibro
          FROM libro A
          JOIN autor B ON A.id_autor = B.id_autor
          JOIN categoria C ON A.id_categoria = C.id_categoria
          JOIN editorial D ON A.id_editorial = D.id_editorial
          JOIN estado_libro E ON A.id_estado = E.id_estado
          WHERE C.nombre = \'${categoria}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }
    
    


}


export default Libro;