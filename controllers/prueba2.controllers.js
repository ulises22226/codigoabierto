const { response } = require('express');
const Test1 = require('../models/test1.model');

const getTest2 = async(req, res = response) => {
    try {

        const test = await Test1.find();
        res.json({
            ok: true,
            msg: 'Categorias tudo',
            msg1: test
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulises'
        });
    }
}


const crearTest2 = async(req, res = response) => {
    const test1 = new Test1(req.body);
    try {


        const testDB = await test1.save();
        res.json({
            ok: true,
            msg: 'categoria creada',
            msg1: testDB
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulises'
        });
    }
}

const actualizarTest2 = async(req, res = response) => {
    const id = req.params.id;
    try {
        const test1DB = await Test1.findById(id);
        if (!test1DB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe test1 por ese id'
            })
        }

        const cambiotest1 = {
            ...req.body
        }

        const test1Actualiza = await Test1.findByIdAndUpdate(id, cambiotest1, { new: true });
        res.json({
            ok: true,
            msg: test1Actualiza
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulises'
        });
    }
}

const eliminarTest2 = async(req, res = response) => {
    const id = req.params.id;
    try {
        const test1DB = await Test1.findById(id);
        if (!test1DB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe test1 por ese id'
            })
        }



        const test1Actualiza = await Test1.findByIdAndDelete(id);
        res.json({
            ok: true,
            msg: test1Actualiza
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulises'
        });
    }
}

module.exports = { getTest2, crearTest2, eliminarTest2, actualizarTest2 }