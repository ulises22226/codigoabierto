const { Schema, model } = require('mongoose');

const BarrioSchema = Schema({

    Nombre: {
        type: String,
        required: true,
        unique: true
    },
    NumeroResolucion: {
        type: String,
        required: true,
        unique: true
    }

});



module.exports = model('Barrio', BarrioSchema);