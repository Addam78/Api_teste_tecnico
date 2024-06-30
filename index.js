const express = require('express')
const morgan = require ('morgan')
const cors = require ('cors')
const app = express ()

//Exportando o arquivo de rotas 
const routes = require('./config/routes') 




app.use(morgan('combined'))
app.use(express.json())
app.use(cors('*')) //Requisição livre
app.use(routes)



app.listen(8081,()=>{
    console.log(`Servidor rodando na porta http://localhost:8081/`)
})