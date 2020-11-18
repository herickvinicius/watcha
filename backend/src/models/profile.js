const { mongo } = require('../database')
const mongoose = require('../database')

const ProfileSchema = new mongoose.Schema({
    userId: {},
    name: {},
    moviesToWatch: {},
    moviesWatched: {},
    favTags: {}
})