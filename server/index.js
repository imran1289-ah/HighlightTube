const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {User} = require('./model/user');
const config = require('./config/key');

//connection to mongoDB database
mongoose.connect(config.mongoURI , {useNewUrlParser:true})
    .then(() => console.log("Database connected"))
    .catch(err => console.error(err));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

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

//endpoint to login
app.post('/user/login', (req,res) => {
    User.findOne({email: req.body.email}, (error, user) => {
        if(!user){
            return res.json({
                loginSuccess: false,
                message: "Email not found"
            })
        }

        user.comparePassword(req.body.password, (error, isMatch) => {
            if(!isMatch){
                return res.json({
                    loginSuccess: false,
                    message: "Wrong password ! Please try again"
                })
            }
        })

        user.generateToken((error, user) => {
            if(error) return res.status(400).send(error);
            res.cookie("x_auth", user.token)
                .status(200)
                .json({
                    loginSuccess: true
                })
        })

    })
})

app.listen(5000);