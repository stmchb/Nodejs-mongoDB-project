const mongoose = require('mongoose')

const mongoUrl ="mongodb+srv://sramtrim:Pk6bDC56ShHckRuQ@cluster0.dsshsjo.mongodb.net/Ecommerce"

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongoUrl);
  console.log("mongoDB connected Successfully")
}