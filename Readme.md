-Projeto
    Projeto de uma api simulando retiradas de nota de um caixa eletronico, visando o minimo de notas possiveis

    Projeto para teste na area de engenharia de software

- Requisitos
    .Node js

-Instalação de bibliotecas para inicar o codigo
    npm install nodemon, cors , morgan, express

    Função do nodemon -  quando forem realizadas  alterações no código , o servidor não parar

    Função do cors - Fornecer acessso a requisição a API de links externos 

    Função do morgan - funciona como um middleware, mostrando logs da requisição, foi utilizado com o combined, pois apresenta informações mais completas

    Função do Express - pois facilita a criação de API

-Iniciar o projeto 
    NPM START (foi alterado no package.json para facilitar a inicialização do projeto)

-Recomendavel utilizar o postman para realizar as requisções no metodo POST

-Exemplo de requisição
    -POST -url - http://localhost:8081/api/saque
    -Acessar o campo body , ir na guia RAW e inserir da seguinte forma

    {"valor":9487} - alterar somente o numero antes dos :

-Dificuldades no decorrer do projeto
    -O armazenamento das notas retiradas , foi necessario utilizar o metodo while, com metodo if and else if , não obtive muito sucesso,o armazenamento das notas estava entrando em loop, tambem senti que meu codigo ficou muito grande, porem não encontrei uma forma de reduzir a quantidade de linhas, sei que é possivel melhorar,vou continuar estudando e adquirindo conhecimento para escrever codigos mais limpos e melhores

    -Foi meu primeiro projeto com API , visando organização e comentarios, espero ter atendido todos requisitos do projeto

