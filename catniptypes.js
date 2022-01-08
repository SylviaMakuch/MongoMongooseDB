const Product = require('./product')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/catniptypes', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connection Open")
    })
    .catch(err => {
        console.log("Connection Error!")
        console.log(err)
})

const s = new Product({
    name: 'Small',
    price: '3.99',
    catergory: '250g'
})

s.save()
    .then(s => {
        console.log(s)
})
    .catch(e =>{
        console.log(e)
    })
