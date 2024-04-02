const mongoose = require("mongoose")

const newJobSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    company_name:{
        type:String,
        require:true,
    },
    experience:{
        type:String,
        require:true,
    },
    qualification:{
        type:String,
        require:true,
    },
    salary:{
        type:String,
        require:true,
    },
    location:{
        type:String,
        require:true,
    },
   
})

module.exports = mongoose.model("New Job",newJobSchema)