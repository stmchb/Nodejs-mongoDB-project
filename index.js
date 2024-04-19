const express = require("express")
const bodyParser = require('body-parser')
const server = express()
const databse = require('./db.js')
const productRouter = require('./routes/data')


server.use('/products',productRouter.router)
server.use(express.json())
server.use(express.static('public'))
server.use(bodyParser.json());

const port = 8080;
server.listen(port,()=>{
  console.log("server started successfully")
})