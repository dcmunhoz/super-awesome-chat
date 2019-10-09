const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contacts: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = model('User', UserSchema);