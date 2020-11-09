const { Schema, model } = require('mongoose');

const PeriodoSchema = Schema({
    Periodo: {
        type: String,
        required: true
    },
    Descripcion: {
        type: String,
        required: true
    }

})


module.exports = model('Periodo', PeriodoSchema);