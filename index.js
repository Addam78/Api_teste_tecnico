const express = require('express')
const morgan = require ('morgan')
const cors = require ('cors')
const bodyParser = require('body-parser')
const filmes = require('./src/data/filmes.json') //Constante que recebe o arquivo json eportado


const app = express ()


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

// server.get('/',function(req,res){
//     return res.json(filmes)
// })

let db = { resultado : 6 * 5}
// let numero ={
//     valor: Math.round(Math.random()*10)
// }

// Buscar dados
app.get('/',function(req,res){
    return res.json(db)
})




// app.post('/saque', (req, res) => {
//     const valorSaque = req.body.valor;
  
//     // Array com os valores das cédulas disponíveis
//     const cedulas = [100, 50, 20, 10, 5, 2];
  
//     // Objeto para armazenar a quantidade de cada cédula necessária
//     const quantidadeCedulas = {};
  
//     // Calcula a quantidade de cada cédula necessária
//     let valorRestante = valorSaque;
//     cedulas.forEach(cedula => {
//       if (valorRestante >= cedula) {
//         quantidadeCedulas[cedula] = Math.floor(valorRestante / cedula);
//         valorRestante %= cedula;
//       }
//     });
  
//     // Retorna a resposta como JSON
//     res.json({
//       valorSaque: valorSaque,
//       quantidadeCedulas: quantidadeCedulas
//     });
//   });
app.post('/saque',function(req,res){

    let cont = 0 //Contador
    let lista=[] //Armazenar as notas

    let valorsaque = parseInt(req.body.valor) //Valor que o usuario insere saque

    //Saque das notas de 100
    while (valorsaque >= 100){
        valorsaque -= 100
        cont ++ //Contador para ver quanto do valor saque vai ser retirado    
    }
    lista.push(`Notas de 100 : ${cont}`)
    cont =0 //zerar o contador para nova contagem 

    //Saque das notas de 50
    while(valorsaque>= 50){
        valorsaque -=50
        cont ++
    }
    lista.push(`Notas de 50 : ${cont}`)
    cont =0 //zerar o contador para nova contagem

    //Saque das notas de 20
    while(valorsaque>= 20){
        valorsaque -= 20
        cont ++
    }
    lista.push(`Notas de 20 : ${cont}`)
    cont =0 //zerar o contador para nova contagem

    //Saque das notas de 10
    while(valorsaque>= 10){
        valorsaque -= 10
        cont ++
    }
    lista.push(`Notas de 10  : ${cont}`)
    cont =0 //zerar o contador para nova contagem

    //Saque das notas de 5
    while(valorsaque>= 5){
        valorsaque -=5
        cont ++
    }
    lista.push(`Notas de 5 : ${cont}`)
    cont =0 //zerar o contador para nova contagem

    //Saque das notas de 2
    while(valorsaque>= 2){
        valorsaque -=2
        cont ++
    }
    lista.push(`Notas de 2 : ${cont}`)
    cont =0 //zerar o contador para nova contagem

  
    res.json({
        valorsaque: valorsaque, //O que soborou do saque
        //jsonlista: jsonlista,
        lista:lista,
        
    })
    
})





app.listen(8081,()=>{
    console.log(`Servidor rodando na porta http://localhost:8081/`)
})