const { Schema, model } = require('mongoose');


const DeudaSchema = Schema({

    Periodo: {
        type: Schema.Types.ObjectId,
        ref: 'Periodo',
        required: true
    },
    Conexion: {
        type: Schema.Types.ObjectId,
        ref: 'Conexion',
        required: true
    },
    PagadoTF: {
        type: Boolean,
        required: true
    }
});


module.exports = model('Deuda', DeudaSchema);