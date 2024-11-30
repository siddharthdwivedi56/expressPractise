let express = require('express');
let Router =  express.Router();
let ProductController = require('../Controllers/ProductController');

Router.get('/',ProductController.getProducts);
Router.post('/add',ProductController.addProduct);

module.exports = Router;
