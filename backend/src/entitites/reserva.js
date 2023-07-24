import executeQuery from "../utils/db.js";

class Reserva {
    id_reserva;
    id_usuario;
    id_libro;
    fecha_reserva;
    fecha_reserva_fin;
    estado;
    constructor(id, idUsuario, idLibro, fechaInicio, fechaFin, estado) {
        this.id_reserva = id;
        this.id_usuario = idUsuario;
        this.id_libro = idLibro;
        this.fecha_reserva = fechaInicio;
        this.fecha_reserva_fin = fechaFin;
        this.estado = estado;
    }

    async getAllReserva() {
        let sql = /*sql*/`
          SELECT
          id_reserva as id,
          id_usuario as idUsuario,
          id_libro as idLibro,
          fecha_reserva as fechaInicio,
          fecha_reserva_fin as fechaFin,
          estado as estado
          FROM reserva`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }


}


export default Reserva;