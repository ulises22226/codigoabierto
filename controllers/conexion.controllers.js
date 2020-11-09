const { response } = require('express');
const Conexion = require('../models/conexion.model');


const GetConexion = async(req, res = response) => {
    try {
        const desde = Number(req.query.desde) || 0;




        const [conexiones, total] = await Promise.all([
            Conexion.find({}, )
            .skip(desde)
            .limit(5)
            .populate('Barrio', 'Nombre')
            .populate('Categoria', 'Categoria Descripcion'),
            Conexion.count()
        ]);

        res.json({
            ok: true,
            msg: 'conexiones',
            msg1: total,
            msg2: conexiones
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error comunicarse con ulises conexion'
        });
    }
}

const GetConexionById = async(req, res = response) => {
    const id = req.params.id;
    try {

        const conexiones = await Conexion.findById(id).
        populate('Barrio', 'Nombre').
        populate('Categoria', 'Categoria Descripcion');

        res.json({
            ok: true,
            msg: 'conexiones',
            msg2: conexiones
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error comunicarse con ulises conexion'
        });
    }
}

const crearConexion = async(req, res = response) => {

    const conexion = new Conexion(req.body)

    try {

        const conexionDB = await conexion.save();
        res.json({
            ok: true,
            msg: 'conexion creada',
            msg1: conexionDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error comunicarse con ulises conexion'
        });
    }
}

const actualizarConexion = async(req, res = response) => {
    const id = req.params.id;

    try {


        const conexionDB = await Conexion.findById(id);

        if (!conexionDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe conexion por ese id'
            })
        }

        const cambioConexion = {
            ...req.body
        }

        const conexionActualizado = await Conexion.findByIdAndUpdate(id, cambioConexion, { new: true });

        res.json({
            ok: true,
            msg: 'conexion actualizado',
            conexionActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error comunicarse con ulises conexion'
        });
    }
}

const eliminarConexion = async(req, res = response) => {

    const id = req.params.id;

    try {

        const conexionDB = await Conexion.findById(id);

        if (!conexionDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe conexion por ese id'
            })
        }
        await Conexion.findByIdAndDelete(id);

        res.json({
            ok: true,
            msg: 'conexion eliminado'
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
    GetConexion,
    crearConexion,
    actualizarConexion,
    eliminarConexion,
    GetConexionById
}