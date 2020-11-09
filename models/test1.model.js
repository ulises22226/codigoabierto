const { Schema, model } = require('mongoose');

const Test1Schema = Schema({
    campo2: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model('Test1', Test1Schema);