// importando o express do node_modules
const express = require('express');
const route = require('./route');
const path = require('path');

// executando o express e startando na váriavel server
const server = express();

// quem vai ser o resposavel para view engine será o ejs
server.set('view engine', 'ejs');

// express usando conteudo estatico public
server.use(express.static("public"));

// Path pega o caminho do projeto, join junta o caminho do projeto com dirname.
// .../rocket.q/src/views
server.set('views', path.join(__dirname, 'views'));

// express usando o arquivo route
server.use(route);

//Arrow function
server.listen(3000, () => console.log("rodando"));

//function normal
// server.listen(3000, function(){
//     console.log("rodando")
// });

