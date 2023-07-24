import executeQuery from "../utils/db.js";

class Libro {
    id_libro;
    id_autor;
    id_categoria;
    id_editorial;
    titulo
    anio_publicacion;
    isbn;
    num_paginas
    id_estado
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
          B.nombre as nomAutor,
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
          id_libro as id,
          id_autor as idAutor,
          nombre as nomAutor,
          id_categoria as idCategoria,
          nombre as nomCategoria,
          id_editorial as idEditorial,
          nombre as nomEditorial,
          titulo as titulo,
          anio_publicacion as publicadoEn,
          isbn as isbn,
          num_paginas as paginas,
          id_estado as idEstado,
          nombre as nomEstadoLibro
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


}


export default Libro;