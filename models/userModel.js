const mongoose = require("mongoose")
const validator = require("validator")


const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true,
        minLength:[3, "full name should have at least 3 cherector"],
        maxLength:[20, "full length should't exceed 20 cherecter "]
       
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validate:[validator.isEmail, "please enter a valied email"]

    },
    password:{
        type:String,
        require:true,
    }
});

module.exports= mongoose.model("user", userSchema)