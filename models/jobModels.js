const mongoose = require("mongoose")

const upplySchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
    },
    phoneNumber:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    education:{
        type:String,
        require:true,
    },
    resume:{
        type:String,
        require:true,
    }
})

module.exports = mongoose.model("upplyed",upplySchema)