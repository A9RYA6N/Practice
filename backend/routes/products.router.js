const express=require('express')
const {check}=require('express-validator')
const {getAllProducts, createProduct, deleteProduct, getProductbyId}=require('../controllers/products.controller')
let productRouter=express.Router();

productRouter.get('/', getAllProducts)
productRouter.post('/', [check('name').notEmpty().withMessage("Please enter the name"), check('price').notEmpty().withMessage("Please enter the price"), check('description').notEmpty().withMessage("Please enter the description"), check('imgUrl').notEmpty().withMessage("Please give an image link")] ,createProduct)
productRouter.delete('/:id', deleteProduct)
productRouter.get('/:id', getProductbyId)

module.exports={productRouter}