const mongoose = require("mongoose")

const ContactInfoSchema = new mongoose.Schema({
    first_name:{
        type:String,
        require:true,
    },
    last_name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    state:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    phone_number:{
        type:String,
        require:true,
    },
    resume:{
        type:String,
        require:true,
    }

})

module.exports = mongoose.model("Contact information",ContactInfoSchema)