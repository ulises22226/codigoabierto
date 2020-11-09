const { response } = require('express');
const Test = require('../models/test.model');

const getTest1 = async(req, res = response) => {
    try {

        const test = await Test.find();
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


const crearTest1 = async(req, res = response) => {
    const test1 = new Test(req.body);
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

const actualizarTest1 = async(req, res = response) => {
    const id = req.params.id;
    try {
        const test1DB = await Test.findById(id);
        if (!test1DB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe test1 por ese id'
            })
        }

        const cambiotest1 = {
            ...req.body
        }

        const test1Actualiza = await Test.findByIdAndUpdate(id, cambiotest1, { new: true });
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

const eliminarTest1 = async(req, res = response) => {
    const id = req.params.id;
    try {
        const test1DB = await Test.findById(id);
        if (!test1DB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe test1 por ese id'
            })
        }



        const test1Actualiza = await Test.findByIdAndDelete(id);
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

module.exports = { getTest1, crearTest1, eliminarTest1, actualizarTest1 }