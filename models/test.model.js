const { Schema, model } = require('mongoose');

const TestSchema = Schema({
    pago: {
        type: Boolean,
        required: true,
        unique: true
    },
    conexion: {
        type: Schema.Types.ObjectId,
        ref: 'Test1',
        required: true,
    },
    periodo: {
        type: Schema.Types.ObjectId,
        ref: 'Test2',
        required: true,
    }

});

module.exports = model('Test', TestSchema);