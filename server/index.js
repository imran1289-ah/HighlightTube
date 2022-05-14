const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017' , {useNewUrlParser:true})
    .then(() => console.log("Database connected"))
    .catch(err => console.error(err));

app.get('/', (req,res) =>{
    res.send('hello world')
})

app.listen(5000);