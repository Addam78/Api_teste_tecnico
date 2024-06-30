const express = require('express')
const morgan = require ('morgan')
const cors = require ('cors')
// const bodyParser = require('body-parser')
const routes = require('./config/routes') //Exportando o arquivo de rotas 
const app = express ()



app.use(morgan('combined'))
// app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors('*')) //Requisição livre
app.use(routes)



app.listen(8081,()=>{
    console.log(`Servidor rodando na porta http://localhost:8081/`)
})