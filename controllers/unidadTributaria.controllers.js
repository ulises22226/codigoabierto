const { response } = require('express');
const UNIDADTRIBUTARIA = require('../models/unidadtributaria.model');

const getUnidadTributaria = async(req, res = response) => {
    try {

        const unidadtributaria = await UNIDADTRIBUTARIA.find();
        res.json({
            ok: true,
            msg: 'tudo unidadtributaria',
            msg: unidadtributaria
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}

const getUnidadTributariaById = async(req, res = response) => {
    const id = req.params.id;
    try {

        const unidadtributaria = await UNIDADTRIBUTARIA.findById(id);
        res.json({
            ok: true,
            msg: 'tudo unidadtributaria',
            msg: unidadtributaria
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}

const crearUnidadTributaria = async(req, res = response) => {
    const unidadtributaria = new UNIDADTRIBUTARIA(req.body);

    try {
        const unidadtributariaDB = await unidadtributaria.save();
        res.json({
            ok: true,
            msg: 'unidad tributaria creada',
            msg1: unidadtributaria
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}
const actualizarUnidadTributaria = async(req, res = response) => {
    const id = req.params.id;
    try {

        const unidadTributariaDB = await UNIDADTRIBUTARIA.findById(id);
        if (!unidadTributariaDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe unidad tributaria por ese id'
            })
        }

        const cambioUnidadTributaria = {
            ...req.body
        }

        const unidadTributariaActualizada = await UNIDADTRIBUTARIA.findByIdAndUpdate(id, cambioUnidadTributaria, { new: true });

        res.json({
            ok: true,
            msg: 'unidad tributaria actualizada',
            msg1: unidadTributariaActualizada
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}
const eliminarUnidadTributaria = async(req, res = response) => {

    const id = req.params.id;
    try {

        const unidadTributariaDB = await UNIDADTRIBUTARIA.findById(id);
        if (!unidadTributariaDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe unidad tributaria por ese id'
            })
        }
        await UNIDADTRIBUTARIA.findByIdAndDelete(id);
        res.json({
            ok: true,
            msg: 'unidad tributaria eliminada'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}




module.exports = { getUnidadTributaria, crearUnidadTributaria, actualizarUnidadTributaria, eliminarUnidadTributaria, getUnidadTributariaById }