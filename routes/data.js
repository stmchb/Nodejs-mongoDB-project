const express = require('express')
const router = express.Router();
const productController = require('../controller/products')

router
 .get('/', productController.getproducts)  //READ
 .post('/:id',productController.addingNewProducts )  //CREATE
 .get('/:id', productController.getProductById )  //READ
 .put('/:id',productController.updateProducts) //UPDATE
 .patch('/:id',productController.patchProducts) //
 .delete('/:id',productController.deleteProducts) //DELETE

exports.router = router;