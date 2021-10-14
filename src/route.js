const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

const route = express.Router();

// Criando rotas
// Requisição e resposta
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}));
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}));
route.get('/room/:room', (req, res) => res.render("room"));

route.post('/question/:room/:question/:action', QuestionController.index);
route.post('/create-room', RoomController.create)

// exportando const route
module.exports = route; 