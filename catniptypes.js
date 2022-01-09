const Product = require("./model/product");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/catniptypes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch((err) => {
    console.log("Connection Error!");
    console.log(err);
  });

const catNipProducts = [
  { name: "Small", price: "3.99", catergory: "250g" },
  { name: "Medium", price: "5.99", catergory: "500g" },
  { name: "Large", price: "9.99", catergory: "1L" },
]

Product.insertMany(catNipProducts)
  .then(res => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  })
