const mongoose = require('../database')
const bcrypt = require('bcryptjs')
const profiles = require('./profile')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    dateOfBirth: {
        type: Date
    }
    //profiles: [profile]
})

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User