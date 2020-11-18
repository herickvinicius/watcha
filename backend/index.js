const express = require('express')

const port = 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./src/controllers/authController')(app)
require('./src/controllers/watchaController')(app)

app.listen(port, () => {
    console.log(`>>> Backend sendo executado na porta ${port}.`)
})