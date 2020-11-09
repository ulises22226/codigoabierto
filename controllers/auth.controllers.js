const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jtw.helpers');
const Usuario = require('../models/user.model');


const login = async(req, res = response) => {

    const { User, Password } = req.body;


    try {
        // verificar si existe usuario en la DB
        const usuarioDB = await Usuario.findOne({ User });



        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no hay usuario con ese nombre'
            })
        }

        // verificar contraseña
        const validPassword = bcrypt.compareSync(Password, usuarioDB.Password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'contraseña no valida',
            })
        }

        const token = await generarJWT(usuarioDB.id);

        res.json({
            ok: true,
            msg: 'login de usuario correcto',
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }

}

module.exports = { login }