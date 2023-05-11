const { default: mongoose } = require('mongoose')
const Mongoose = require('mongoose')

const userSchema = new Mongoose.Schema ({
    firstName: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },


})

userModel = Mongoose.model('User',userSchema)

module.exports = userModel