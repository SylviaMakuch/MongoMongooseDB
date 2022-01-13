const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./model/product");
const { createUnzip } = require("zlib");
const methodOverride = require('method-override');
const { emitWarning } = require("process");
__dirname = path.resolve(path.dirname(""));
app.use(express.urlencoded({ extended: true }));

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
app.use(methodOverride('method'))

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.render("index", { products });
});

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render("./products/show", { product });
  });

app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("./products/edit",{ product });
});
//we cannot make a put req so we need to make a post request in the edit.ejs file with downloading 'method overide' 

app.put("/products/:id/", async (req, res) => {
    const { id } = req.params;
    const prodcut = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    res.redirect(`/products/${product._id}`)
  });


// app.get('/products/new', (req, res) => {
//     res.render('products/new.ejs' )
// })

// app.post('/products', async (req, res) => {
//     const newProduct = new Product(req.body);
//     await newProduct.save();
//     res.redirect(`/products/${newProduct._id}`)
// })



app.listen(3000, () => {
  console.log("App on port 3000!");
});
