const express = require('express')
const initDB = require('./config/db')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

//app.get('/',(req, res) => {
    //res.send( 'Hola mundo'
  //  )
//}) 

const userRouters = require('./app/routes/user')
const itemsRouters = require('./app/routes/items')

//for parsing json
app.use(
  bodyParser.json({
    limit: '20mb'
  })
)
//for parsing application/
app.use(
  bodyParser.urlencoded({
    limit: '20mb',
    extended: true
  })
)
app.use(userRouters)
app.use(itemsRouters)

app.listen(port, ( ) => {
    console.log('La aplicación esta en linea!');
})

initDB()