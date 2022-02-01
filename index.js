// imports
const express = require('express')
const app = express()

//middlewares
require('dotenv').config()
app.use(express.static('public'))
app.set('views',__dirname+'/views')
app.set('view engine', 'hbs')

// routes
app.use('/', require('./routes/routes'))

// server
app.listen(process.env.PORT, ()=>{
    console.log("activo de guayaba");
})