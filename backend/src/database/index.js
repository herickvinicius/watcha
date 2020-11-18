const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/watcha', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(r => {
        const msg = '>> Banco conectado.'
        console.log('\x1b[32m', msg, '\x1b[0m')
    })
    .catch(e => {
        const msg = 'OPA! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })

mongoose.Promise = global.Promise

module.exports = mongoose