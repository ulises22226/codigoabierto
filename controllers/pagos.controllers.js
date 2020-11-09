const { response } = require('express');
const Pagos = require('../models/pagadoTF.model');


const getPagos = async(req, res = response) => {

    try {

        const pagos = await Pagos.find().
        populate('Conexion', 'NumeroConexion Nombre').
        populate('Periodo', 'Periodo Descripcion');

        res.json({
            ok: true,
            msg: 'pagos tudo',
            msg1: pagos
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error comunicarse con ulises'
        });
    }

}

const crearPagos = async(req, res = response) => {

    const pagos = new Pagos(req.body);

    try {

        const pagosDB = await pagos.save();

        res.json({
            ok: true,
            msg: 'pago creado',
            msg1: pagosDB
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error comunicarse con ulises'
        });
    }

}

const actualizarPagos = async(req, res = response) => {
    const id = req.params.id;
    try {

        const pagosDB = await Pagos.findById(id);

        if (!pagosDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe pagos por ese id'
            })
        }

        const cambioEstadoPago = {
            ...req.body
        }

        const pagoActualizado = await Conexion.findByIdAndUpdate(id, cambioEstadoPago, { new: true });

        res.json({
            ok: true,
            msg: 'pago actualizado',
            msg2: pagoActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error comunicarse con ulises'
        });
    }

}

const eliminarPagos = async(req, res = response) => {
    const id = req.params.id;
    try {

        const pagosDB = await Pagos.findById(id);

        if (!pagosDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe pagos por ese id'
            })
        }


        await Pagos.findByIdAndDelete(id);

        res.json({
            ok: true,
            msg: 'pago eliminado, nunca ocupar esta opcion'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error comunicarse con ulises'
        });
    }

}

module.exports = { getPagos, crearPagos, actualizarPagos, eliminarPagos }