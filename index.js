const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./model/product");
const { createUnzip } = require("zlib");
__dirname = path.resolve(path.dirname(""));

mongoose
  .connect("mongodb://localhost:27017/catnip", {
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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.render('index', {products});
});

app.listen(3000, () => {
  console.log("App on port 3000!");
});
