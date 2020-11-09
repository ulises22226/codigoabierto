const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    Categoria: {
        type: String,
        required: true,
    },
    Descripcion: {
        type: String,
        required: true,
    }
})

module.exports = model('Categoria', CategoriaSchema);