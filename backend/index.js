const express = require('express')

const port = process.env.SERVER_PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./src/controllers/authController')(app)
require('./src/controllers/watchaController')(app)
require('./src/services/movieService')(app)

app.listen(port, () => {
    console.log(`>>> Backend sendo executado na porta ${port}.`)
})