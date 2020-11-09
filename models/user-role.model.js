const { Schema, model } = require('mongoose');

const UserRoleSchema = Schema({
    tipoUsuario: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = model('UserRole', UserRoleSchema);