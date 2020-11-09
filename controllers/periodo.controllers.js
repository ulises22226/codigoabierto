const { response } = require('express');
const Periodo = require('../models/periodo.model');

const getPeriodo = async(req, res = response) => {
    try {

        const periodos = await Periodo.find();
        res.json({
            ok: true,
            msg: 'get un periodo',
            msg1: periodos
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}

const getPeriodoById = async(req, res = response) => {
    const id = req.params.id;
    try {

        const periodos = await Periodo.findById(id);
        res.json({
            ok: true,
            msg: 'get tudo periodo',
            msg1: periodos
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}

const crearPeriodo = async(req, res = response) => {

    const periodo = new Periodo(req.body);


    try {

        const periodoDB = await periodo.save();

        res.json({
            ok: true,
            msg: 'periodo creado',
            msg1: periodo
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}

const actualizarPeriodo = async(req, res = response) => {
    const id = req.params.id;
    try {

        const periodoDB = await Periodo.findById(id);
        if (!periodoDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe periodo por ese id'
            })
        }

        const cambioPeriodo = {
            ...req.body
        }

        const peridodActualizado = await Periodo.findByIdAndUpdate(id, cambioPeriodo, { new: true });

        res.json({
            ok: true,
            msg: 'periodo actualizado',
            peridodActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}

const eliminarPeriodo = async(req, res = response) => {

    const id = req.params.id;
    try {

        const periodoDB = await Periodo.findById(id);
        if (!periodoDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe periodo por ese id'
            })
        }
        await Periodo.findByIdAndDelete(id);
        res.json({
            ok: true,
            msg: 'periodo eliminado'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}

module.exports = {
    getPeriodo,
    crearPeriodo,
    actualizarPeriodo,
    eliminarPeriodo,
    getPeriodoById
}