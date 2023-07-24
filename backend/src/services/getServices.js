import Autor from "../entitites/autores.js";
import Categoria from "../entitites/categoria.js";
import Editorial from "../entitites/editorial.js";
import EstadoLibro from "../entitites/estadoLibro.js";
import Libro from "../entitites/libro.js";
import Prestamo from "../entitites/prestamo.js";
import Reserva from "../entitites/reserva.js";
import Usuario from "../entitites/usuario.js";

const getAllUsuariosService = async () => {
    const usuario = new Usuario();
    const result = await usuario.getAllUsuarios();
    return result;
};

const getAllAutoresService = async () => {
    const autor = new Autor();
    const result = await autor.getAllAutores();
    return result;
};

const getAllCategoriasService = async () => {
    const categoria = new Categoria();
    const result = await categoria.getAllCategorias();
    return result;
};

const getAllEditorialesService = async () => {
    const editorial = new Editorial();
    const result = await editorial.getAllEditoriales();
    return result;
};

const getAllEstadoLibrosService = async () => {
    const estadoLibro = new EstadoLibro();
    const result = await estadoLibro.getAllEstadoLibro();
    return result;
};

const getAllLibrosService = async () => {
    const libro = new Libro();
    const result = await libro.getAllLibros();
    return result;
};

const getLibrosDisponiblesService = async () => {
    const libro = new Libro();
    const result = await libro.getLibrosDisponibles();
    return result;
};


const getLibrosPorAutorService = async (autor) => {
    const libro = new Libro();
    const result = await libro.getlibrosPorAutor(autor);
    return result;
};

const getLibrosPorCategoriaService = async (categoria) => {
    const libro = new Libro();
    const result = await libro.getlibrosPorCategoria(categoria);
    return result;
};

const getLibrosPorPaginasService = async (paginas) => {
    const libro = new Libro();
    const result = await libro.getLibrosPorPaginas(paginas);
    return result;
};

const getAllPrestamoService = async () => {
    const prestamo = new Prestamo();
    const result = await prestamo.getAllPrestamos();
    return result;
};

const getLibrosPrestadosService = async (usuario) => {
    const prestamo = new Prestamo();
    const result = await prestamo.getLibrosPrestados(usuario);
    return result;
};

const getPrestamoByUsuarioService = async (usuario) => {
    const prestamo = new Prestamo();
    const result = await prestamo.getPrestamoByUsuario(usuario);
    return result;
};

const getAllReservaService = async () => {
    const reserva = new Reserva();
    const result = await reserva.getAllReserva();
    return result;
};

export {
    getAllUsuariosService,
    getAllAutoresService,
    getAllCategoriasService,
    getAllEditorialesService,
    getAllEstadoLibrosService,
    getAllLibrosService,
    getLibrosDisponiblesService,
    getLibrosPrestadosService,
    getLibrosPorAutorService,
    getLibrosPorCategoriaService,
    getLibrosPorPaginasService,
    getAllPrestamoService,
    getPrestamoByUsuarioService,
    getAllReservaService
}