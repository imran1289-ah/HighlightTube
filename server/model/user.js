const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

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

// this function will hash the password before the user is saved in the database
userSchema.pre('save', function (next){
    var user = this;

    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, function(error, salt){
            if(error){
                return next(error);
            }

            bcrypt.hash(user.password, salt, function(error, hash){
                if(error) return next(error);
                user.password = hash
                next();
                
            })    
        })

    }
    else{
        next ()
    }
});

//this function will compare passwords
userSchema.methods.comparePassword = function(realPass, cb){
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch)
    } )
}

//this function will generate a token
userSchema.methods.generateToken = function(cb) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'secret')

    user.token = token;
    user.save(function (error, user){
        if(error) return cb(error)
        cb(null, user);
    })
}

userSchema.statics.findByToken = function (token, cb) {
    var user = this;

    jwt.verify(token, 'secret', function(err, decode){
        user.findOne({
            "_id":decode,
            "token":token,
            function(err,user){
                if(err) return cb(err);
                cb(null, user);
            }
        })
    })
}


const User = mongoose.model('User', userSchema);
module.exports = {User}