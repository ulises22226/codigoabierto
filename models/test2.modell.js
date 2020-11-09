const { Schema, model } = require('mongoose');

const Test3Schema = Schema({
    campo3: {
        type: String,
        required: true,
        unique: true
    }
});

Test3Schema.pre('save', async function(done) {});

module.exports = model('Test2', Test3Schema);