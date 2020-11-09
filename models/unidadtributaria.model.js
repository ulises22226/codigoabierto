const { Schema, model } = require('mongoose');



const UnidadTributariaSchema = Schema({
    Valor: {
        type: Number,
        required: true
    }
})


module.exports = model('UnidadTributaria', UnidadTributariaSchema);