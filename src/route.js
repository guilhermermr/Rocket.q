const express = require('express');
const QuestionController = require('./controllers/QuestionController')

const route = express.Router();

// Criando rotas
// Requisição e resposta
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}));
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}));
route.get('/room', (req, res) => res.render("room"));

route.post('/room/:room/:question/:action', QuestionController.index);

// exportando const route
module.exports = route; 