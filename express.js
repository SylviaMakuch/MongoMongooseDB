const express = require('express');
const app = express ();
const path = require ('path');
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
    const mongoose = await mongoose.connect("mongodb://localhost:27017/userdata");
      if (!mongoose) {
        console.log("Failed Connection");
      } else {
        console.log("CONNECTED!");
      }
    };

app.set('views', path.join(__dirname, 'views'));
app.set('view engiene', 'ejs');

app.get('/dog', (req, res) =>{
    res.send('WoooF')
})

app.listen(3000, () =>{
    console.log('App on port 3000!')
})