const { Schema, model } = require('mongoose');

const PagadoTFSchema = Schema({

    Conexion: {
        type: Schema.Types.ObjectId,
        ref: 'Conexion',
        required: true
    },
    Periodo: {
        type: Schema.Types.ObjectId,
        ref: 'Periodo',
        required: true
    },
    Pago: {
        type: Boolean,
        default: false
    }

})


module.exports = model('PagadoTF', PagadoTFSchema);