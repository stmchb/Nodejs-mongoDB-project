const products = require('../data.json')
// const Product= require('../model/productSchema')
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

exports.getproducts = async (req,res)=> {
  const getAllProducts = await Product.find({price:384}) 
  res.json(getAllProducts)
}
// const productData = {
//   id: 
//   title:
//   price: 
//   description:
//   rating: 
//   brand: 
// };
  exports.addingNewProducts= async(req, res) => {
      try {
          const data = req.body;
          const newProduct = new productSchema(data);
          await newProduct.save();
          console.log("Product saved");
          res.status(200).json(newProduct);
      } catch (error) {
          res.status(500).json({ error: 'internal server error' });
        console.log(error);
      }
  }
  
 
  
  
  
//     console.log('Request Body:', req.body); // Log the entire request body
//     const createProduct = new Product(req.body);
//     console.log('Created Product:', createProduct); // Log the product object
//     createProduct.save()
//         .then((result) => {
//             console.log('Document Created:', result); // Log the result of saving
//             res.json(result); // Send the saved product as JSON response
//         })
//         .catch((error) => {
//             console.error('Error:', error); // Log any errors that occur during saving
//             res.status(500).json({ error: 'Failed to save product' }); // Send error
//         });
// };
  // console.log("Request Body:", req.body);
  // res.sendStatus(200)
  // createProduct.title = "iphoneX";
  // createProduct.price = "384";
  // createProduct.description = "an Apple phone is the phone you cant get over";
  // createProduct.rating = 4.58;
  // createProduct.brand = "Apple";
//   const saveProduct = async () => {
//   try {
//     const docs = await createProduct.save();
//     console.log("Document Created", docs);
//   } catch (err) {
//     console.error("Error:", err);
//   }
// };
// Call the asynchronous function

  // products.push(req.body)
  // res.send(req.body)
// }

exports.patchProducts = (req,res)=>{
  const id = req.params.id;
  const productIndex = products.findIndex(p=>p.id  === id)
  products.splice(productIndex,1,{...products,...req.body})
  res.sendStatus(200);
}

exports.getProductById =  (req,res)=>{
  const id = +req.params.id;
  const product = products.find(p=>p.id === id)
  res.json(product)
}

exports.updateProducts = async(req,res)=>{
  const id = req.params.id
  try{
   await Product.findOneAndUpdate({name:"iphoneX"},{price:999})
   console.log(req.body)
   res.sendStatus(200)
  }
  catch(err){
    console.log('error',err)
  }

  // const id = +req.params.id
  // const productIndex = products.findIndex(product=>product.id === id)
  // const product = products[productIndex]
  // products.splice(productIndex,1,{...product,...req.body})
  // res.send(product)
  // res.sendStatus(200)
}
exports.deleteProducts =  async(req,res)=>{
  const id = req.params.id
  try{
    await Product.findOneAndDelete({_id:"6616b8733a4de544143995c8"})
  }
  catch(err){
    console.log(err)
  }
  res.send(200)
  // const id = +req.params.id
  // const productIndex = products.findIndex(product=>product.id === id)
  // products.splice(productIndex,1)
  // res.sendStatus(200)
}
exports.replaceProducts = async(req,res)=>{

  const id =req.params.id;
  try{
    await Product.findOneAndReplace({_id:id},req.body)
  }
  catch(err){
    console.log(err);
  }
  // const id = +req.params.id
  // const productIndex = products.findIndex(product=>product.id === id)
  // const product = products[productIndex]
  // products.splice(productIndex,1,{...product,...req.body})
  // res.sendStatus(200)
}

// const Product = mongoose.model('Product', productSch);
  const Product = mongoose.model('Product', productSchema);