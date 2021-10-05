const express = require('express');

const route = express.Router();

// Criando rotas
// Requisição e resposta
route.get('/', (req, res) => res.render("index"));

// exportando const route
module.exports = route; 