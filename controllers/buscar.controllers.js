const { response } = require('express');
const pagadoTFModel = require('../models/pagadoTF.model');

const getPeriodoBusqueda = async(req, res = response) => {
    try {
        // esto me trae todas las conexiones de un periodo
        const periodo = req.params.periodo;
        const fefe = await pagadoTFModel.find({ Periodo: periodo })
            .populate('Periodo', 'Descripcion');



        res.json({
            ok: true,
            msg: fefe
        })




    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulises'
        });
    }
}

const getConexionBusqueda = async(req, res = response) => {
    try {
        // esto me trae una conexion con un periodo
        const conexion = req.params.conexion;
        const fefe = await pagadoTFModel.find({ Conexion: conexion })
            .populate('Conexion', 'Nombre Barrio ');



        res.json({
            ok: true,
            msg: fefe
        })




    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulises'
        });
    }
}

const getBarrioBusqueda = async(req, res = response) => {
    try {
        //  esto me trae conexiones por barrio y periodo
        const Barrio = req.params.barrio;
        const fefe = await pagadoTFModel.find({ Conexion: { _id: Barrio } })
            .populate('Conexion', 'Nombre Barrio ');



        res.json({
            ok: true,
            msg: fefe
        })




    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulises'
        });
    }
}








module.exports = {
    getPeriodoBusqueda,
    getConexionBusqueda,
    getBarrioBusqueda
}