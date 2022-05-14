const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email: {
        type:String
    },
    password : {
        type:String,
        minglength : 6
    },
    role :{
        type: Number,
        default:0
    },
    token:{
        type:String,
    },
    tokenExp:{
        type:Number
    }
})

const User = mongoose.model('User', userSchema);
module.exports = {User}