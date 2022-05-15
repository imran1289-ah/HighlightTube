const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {User} = require('./model/user');

//connection to mongoDB database
mongoose.connect('mongodb://localhost:27017' , {useNewUrlParser:true})
    .then(() => console.log("Database connected"))
    .catch(err => console.error(err));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req,res) => {
    res.json("Hello YI");
})


//endpoint to register
app.post('/user/register', (req,res) => {
    const user = new User(req.body)
    user.save((err, userData) =>{
        if(err) return res.json ({success: false,err})
    })
    return res.status(200).json({
        success:true
    })
})

app.listen(5000);