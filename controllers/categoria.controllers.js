const { response } = require('express');
const Categoria = require('../models/categoria.model');


const getCategorias = async(req, res = response) => {
    try {
        const categoria = await Categoria.find();
        res.json({
            ok: true,
            msg: 'Categorias tudo',
            msg1: categoria
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulises'
        });
    }
}

const getCategoriasById = async(req, res = response) => {
    const id = req.params.id;
    try {
        const categoria = await Categoria.findById(id);
        res.json({
            ok: true,
            msg: 'Categorias tudo',
            msg1: categoria
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulises'
        });
    }
}

const crearCategoria = async(req, res = response) => {
    const categoria = new Categoria(req.body);
    try {

        const categoriaDB = await categoria.save()
        res.json({
            ok: true,
            msg: 'categoria creada',
            msg1: categoriaDB
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulises'
        });
    }
}

const actualizarCategoria = async(req, res = response) => {
    const id = req.params.id;
    try {

        const categoriaDB = await Categoria.findById(id);
        if (!categoriaDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe categoria por ese id'
            })
        }

        const cambioCategoria = {
            ...req.body
        }

        const categoriaActualizado = await Categoria.findByIdAndUpdate(id, cambioCategoria, { new: true });

        res.json({
            ok: true,
            msg: 'categoria actualizada',
            msg1: categoriaActualizado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulises'
        });
    }
}

const eliminarCategoria = async(req, res = response) => {
    const id = req.params.id;
    try {

        const categoriaDB = await Categoria.findById(id);
        if (!categoriaDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe categoria por ese id'
            })
        }
        await Categoria.findByIdAndDelete(id);
        res.json({
            ok: true,
            msg: 'categoria eliminada'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulises'
        });
    }
}




module.exports = {
    getCategorias,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria,
    getCategoriasById
}