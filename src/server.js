require('dotenv').config({path:'.env'})

const express = require('express')
const cors = require('cors')

const bodyParser = require('body-parser')
const path = require('path')
const routes =  require('./routes');
const server = express();


server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use(express.json())
server.use('/', routes)

server.listen(process.env.PORT, ()=>{
  console.log(`✨ Servidor ativo & rodando em http://localhost:${process.env.PORT}`)
});
