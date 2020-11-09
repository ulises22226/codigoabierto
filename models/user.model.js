const { Schema, model } = require('mongoose');


const UserSchema = Schema({
    User: {
        type: String,
        require: true,
        unique: true
    },

    Password: {
        type: String,
        require: true
    },

    UserRole: {
        type: Schema.Types.ObjectId,
        ref: 'UserRole',
        require: true
    }
})


module.exports = model('User', UserSchema);