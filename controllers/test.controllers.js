const { response } = require('express');
const Conexion = require('../models/conexion.model');
const Pagos = require('../models/pagadoTF.model');
const Barrio = require('../models/barrio.model');



const GetConexion = async(req, res = response) => {
    try {
        const conexiones = await Conexion.find();
        // const diid = [];
        // diid.push(req.body._id);
        // console.log(diid);

        res.json({
            ok: true,
            msg: 'conexiones',
            msg1: conexiones,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error comunicarse con ulises conexion'
        });
    }
}














module.exports = {
    GetConexion
}