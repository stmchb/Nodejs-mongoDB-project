const mongoose = require('mongoose')

const { Schema } = mongoose;

const productSchema = new Schema({
  id:Number,
  title:String,
  price:Number,
  description:String,
  rating:Number,
  brand:String
})

const Product = mongoose.model('Product',productSchema)
module.exports = Product;