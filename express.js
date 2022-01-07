const express = require('express');
const app = express ();
const path = require ('path');
const mongoose = require("mongoose");

app.set('views', path.join(__dirname, 'views'));
app.set('view engiene', 'ejs');

app.get('/dog', (req, res) =>{
    res.send('WoooF')
})

app.listen(3000, () =>{
    console.log('App on port 3000!')
})