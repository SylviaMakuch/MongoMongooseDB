const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./model/product");
__dirname = path.resolve(path.dirname(""));

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

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.render("index", { products });
});

app.get('/product/new',(req, res) => {
    res.render('/products/new')
})

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  console.log(product);
  res.render("/products/show", { product });
});

app.listen(3000, () => {
  console.log("App on port 3000!");
});
