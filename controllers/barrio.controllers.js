const { response } = require('express');
const Barrio = require('../models/barrio.model');


const getBarrio = async(req, res = response) => {
    // const barrio = await Barrio.find({}, 'nombre'); para filtrar resultados, lo que quiero ver esta entre las comillas simples

    try {

        const barrio = await Barrio.find();
        res.json({
            ok: true,
            barrio
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulises'
        });
    }

};

const getBarrioById = async(req, res = response) => {
    // const barrio = await Barrio.find({}, 'nombre'); para filtrar resultados, lo que quiero ver esta entre las comillas simples
    const id = req.params.id;
    try {

        const barrio = await Barrio.findById(id);
        res.json({
            ok: true,
            barrio
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulises'
        });
    }

};

const crearBarrio = async(req, res = response) => {
    const { Nombre, NumeroResolucion } = req.body;


    try {

        const existenombre = await Barrio.findOne({ Nombre });
        if (existenombre) {
            return res.status(400).json({
                ok: false,
                msg: 'nombre del barrio ya existe'
            });
        };

        const existenumeroresolucion = await Barrio.findOne({ NumeroResolucion });
        if (existenumeroresolucion) {
            return res.status(400).json({
                ok: false,
                msg: 'numero de solucion ya existe'
            })
        }

        const barrio = new Barrio(req.body);
        await barrio.save();

        res.json({
            ok: true,
            barrio
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulises'
        });
    }

};

const actualizarBarrio = async(req, res = response) => {

    const id = req.params.id;


    try {

        const BarrioDB = await Barrio.findById(id);
        if (!BarrioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe usuario por ese id'
            });
        }

        const campos = req.body;

        if (BarrioDB === req.body.Nombre) {
            delete campos.Nombre;
        } else {
            const existeBarrio = await Barrio.findOne({ email: req.body.Nombre });
            if (existeBarrio) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un barrio con ese nombre'
                });
            }
        };


        const barrioActualizado = await Barrio.findByIdAndUpdate(id, campos, { new: true });

        res.json({
            ok: true,
            msg: 'barrio actualizado',
            id,
            barrioac: barrioActualizado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulisess'
        });

    }

};

const eliminarBarrio = async(req, res = response) => {

    id = req.params.id
    try {

        const barrioDB = await Barrio.findById(id);
        if (!barrioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe barrio por ese id'
            });
        }

        await Barrio.findByIdAndDelete(id);

        res.json({
            ok: true,
            msg: 'barrio eliminado',
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulisess'
        });
    }


};


module.exports = {
    getBarrio,
    crearBarrio,
    actualizarBarrio,
    eliminarBarrio,
    getBarrioById
}