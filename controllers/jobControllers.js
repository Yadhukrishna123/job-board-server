const job = require("../models/jobModels")

exports.upplyedUser = async (req,res)=>{
    const{email,  phonenumber, address, education} = req.body

    const resume = req.file.path;


    try {

       const Job = await job.create({
        email,
        phonenumber,
        address,
        education,
        resume
    })
    
    if(!Job){
        return res.status(500).json({
            success:false,
            message:"user upplyed fails",
            
        })
    }

    res.status(201).json({
        success:true,
        message:"successfully uppjyed",
        Job
    })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }  
}

