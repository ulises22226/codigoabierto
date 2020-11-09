const { Schema, model } = require('mongoose');


const ConexionSchema = Schema({

    NumeroConexion: {
        type: Number,
        required: true
    },
    Nombre: {
        type: String,
        required: true,
    },
    Apellido: {
        type: String,
        required: true,
    },

    DNI: {
        type: Number,
        required: true
    },
    Barrio: {
        type: Schema.Types.ObjectId,
        ref: 'Barrio',
        required: true
    },
    Categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    }


})


module.exports = model('Conexion', ConexionSchema);