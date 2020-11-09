const { response } = require('express');
const Usuario = require('../models/user.model');
const PagoTF = require('../models/pagadoTF.model');
// const Conexion = require('../models/conexion.model');
// const Barrio = require('../models/barrio.model');
// const Barrio = require('../models/barrio.model')
// const Conexiones = require('../models/conexion.model');

const getTodo = async(req, res = response) => {
    try {

        // const conexion = req.params.conexion;
        // const periodo = req.params.periodo;
        // const tete = await PagoTF.find({ Periodo: periodo }).populate('Periodo', 'Descripcion');
        // const rere = await PagoTF.find({ Conexion: conexion }).populate('Conexion', 'NumeroResolucion Nombre Barrio');


        const periodo = req.params.periodo;
        const barrio = req.params.barrio;
        const regex = new RegExp(barrio, 'i');
        // const fefe = await PagoTF.find({ Conexion: { Barrio: regex } });
        // const ueue = await PagoTF.find({ Conexion: { Barrio: barrio } });
        const fefe = await PagoTF.find({ Conexion: { _id: barrio }, Periodo: periodo })
            .populate('Conexion', 'Barrio')
            .populate('Periodo', 'Descripcion');

        // Conexion: { Barrio: { _id: barrio } }

        // const tete = await PagoTF.find({ "Conexion.Barrio": ObjectId("barrioso") }).populate('Conexion', 'Nombre');
        // const fefe = await Conexion.find({ Barrio: barrioso }).populate('Barrio', 'Nombre');
        // const fefe = await Conexion.find({ Barrio: barrio }).populate('Barrio', 'Nombre');
        // const fefe = await PagoTF.find({ Conexion: { Barrio: barrio } }).populate('Conexion', 'NumeroResolucion Nombre Barrio');
        res.json({
            ok: true,
            msg: 'hola mundo desde las busquedas',
            // conexion,
            // periodo,
            barrio,
            fefe,
            // ueue,
            // tete,
            // rere
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'ver logs y comunicarse con ulises'
        });
    }
}






module.exports = {
    getTodo
}