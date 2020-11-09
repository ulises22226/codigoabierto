const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jtw.helpers');
const Usuario = require('../models/user.model');


const getUsuario = async(req, res = response) => {


    const desde = Number(req.query.desde) || 0;
    console.log(desde);

    try {
        // skip limit para paginar resultados

        const user = await Usuario.find().
        populate('UserRole', 'tipoUsuario').
        skip(desde).
        limit(5);
        // count para saber cuantos registros tengo en la bd en esa coleccion
        const total = await Usuario.count();

        res.json({
            ok: true,
            msg: 'TUDO usuarios',
            msg1: user,
            msg2: total
        })
    } catch (error) {
        console.log(error);
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}

const crearUsuario = async(req, res = response) => {
    const { User, Password, UserRole } = req.body;

    try {
        const user = new Usuario(req.body);
        //encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.Password = bcrypt.hashSync(Password, salt);

        const userDB = await user.save();
        const token = await generarJWT(user.id);
        res.json({
            ok: true,
            msg: 'usuario creado',
            msg1user: user,
            msg2token: token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}

const actualizarUsurio = async(req, res = response) => {
    const id = req.params.id;
    try {

        const userDB = Usuario.findById(id);
        if (!userDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe user por ese id'
            })
        }

        const campos = req.body;
        delete campos.Password;


        if (userDB.User === req.body.User) {
            delete campos.User;
        } else {
            const existeUser = await Usuario.findOne({ User: req.body.User });
            if (existeUser) {
                return res.status(400).json({
                    ok: false,
                    msg: 'ya exite usuario con ese nombre'
                });
            }
        }



        const userActualizado = await Usuario.findByIdAndUpdate(id, campos, { new: true })

        res.json({
            ok: true,
            msg: 'usuario actualizado',
            msg1: userActualizado
        });

    } catch (error) {
        console.log(error);
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}

const eliminarUsuario = async(req, res = response) => {
    const id = req.params.id;
    try {

        const userDB = Usuario.findById(id);
        if (!userDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe user role por ese id'
            })
        }
        await Usuario.findOneAndDelete(id);
        res.json({
            ok: true,
            msg: 'usuario eliminado'
        })
    } catch (error) {
        console.log(error);
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}

module.exports = { getUsuario, crearUsuario, actualizarUsurio, eliminarUsuario }