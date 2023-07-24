import { getAllUsuarios } from "../services/getServices.js";


const getUsuariosController = async (req, res, next) => {
    try {
        const { id, nombres, apellidos, direccion, celular, correo} = req.query
        const result = await getAllUsuarios(id, nombres, apellidos, direccion, celular, correo);
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    getUsuariosController   
}