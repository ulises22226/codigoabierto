const { response } = require('express');
const UserRole = require('../models/user-role.model');

const getUserRole = async(req, res = response) => {
    try {
        const userrole = await UserRole.find();
        res.json({
            ok: true,
            msg: 'TUDU USER ROLE',
            msg: userrole
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}

const crearUserRole = async(req, res = response) => {
    const USERROLE = new UserRole(req.body);
    try {
        const userroleDB = await USERROLE.save();
        res.json({
            ok: true,
            msg: 'User role creado',
            ms1: USERROLE
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}

const actualizarUserRole = async(req, res = response) => {
    const id = req.params.id;
    try {
        const UserRoleDB = UserRole.findById(id);


        if (!UserRoleDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe user role por ese id'
            })
        }

        const cambioUserRole = {
            ...req.body
        }

        const userRoleActualizado = await UserRole.findByIdAndUpdate(id, cambioUserRole, { new: true });

        res.json({
            ok: true,
            msg: 'User role actualizado',
            msg1: userRoleActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}

const eliminarUserRole = async(req, res = response) => {
    const id = req.params.id;
    try {

        const UserRoleDB = UserRole.findById(id);


        if (!UserRoleDB) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe user role por ese id'
            })
        }
        await UserRole.findOneAndDelete(id);
        res.json({
            ok: true,
            msg: 'User role eliminado',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error en el server, habla con ulises'
        })
    }
}

module.exports = { getUserRole, crearUserRole, actualizarUserRole, eliminarUserRole }