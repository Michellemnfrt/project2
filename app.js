const express = require('express')
const app = express()
const bodyParser =require('body-parser')
const router = require('./routes/index.js')

app.use(bodyParser.urlencoded({ extended: true}))

app.set('view engine', "hbs")

app.use(router)

app.listen(3000, () => {
    console.log('app listening on port 3000')
})
