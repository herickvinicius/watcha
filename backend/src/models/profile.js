//const { mongo } = require('../database')
const mongoose = require('../database')

const ProfileSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    name: {
        type: String,
        require: true
    }
    //moviesToWatch: {},
    //moviesWatched: {},
    //favTags: {}
})

const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = Profile