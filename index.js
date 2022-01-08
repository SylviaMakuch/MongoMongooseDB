const express = require('express');
const app = express ();
const path = require ('path');
const mongoose = require("mongoose");
__dirname = path.resolve(path.dirname(''));

mongoose.connect('mongodb://localhost:27017/catnip', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connection Open")
    })
    .catch(err => {
        console.log("Connection Error!")
        console.log(err)
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engiene', 'ejs');

app.get('/cat', (req, res) =>{
    res.send('Meow')
})

app.listen(3000, () =>{
    console.log('App on port 3000!')
})