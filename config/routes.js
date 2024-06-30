const express = require('express')
const routes = express.Router()

//Constante nota para controller , 

const notas = require('../controllers/saque_notas')

//Testando api 
routes.get('/', notas.teste)
 
//const notas pega caminho da pasta controller, contar_notas é o exports na pasta controller na parte de logica
routes.post('/api/saque',notas.contar_notas)

module.exports = routes