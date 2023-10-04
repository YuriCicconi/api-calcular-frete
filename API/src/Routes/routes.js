const express = require('express');
const routes = express();
const produtos = require('../Controllers/produtos');

routes.get('/produtos', produtos.getProdutos);
routes.get('/produtos/:idProduto', produtos.getProduto);
routes.get('/produtos/:idProduto/frete/:cep', produtos.calcularFrete);


module.exports = routes;