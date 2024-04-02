const bcrypt = require("bcrypt")
const User = require("../models/userModel");
const newJob = require("../models/newJobModel")







exports.userRegister = async(req,res)=>{
    
    const { fullname, email, password} = req.body;
    const hashedPassword =await bcrypt.hash(password, 10)
    
   try {
    const user =await User.create({
        fullname,
        email,
        password:hashedPassword
    });
    if(!user){
        return res.status(500).json({
            success:false,
            message:"Registration fails"
        })
    }
    console.log(user);

    res.status(201).json({
        success:true,
        message:"Successufully Registerd",
        user
    })

   } catch (error) {
     res.status(500).json({
        success:false,
        message:error.message
    })
   }
   
}

exports.userLogin =async (req,res)=>{

    const {email,password}=req.body

    try {
        const user =await User.findOne({email})
        if(!user){
        
            return res.status(401).json({
                success:false,
                message:"invalied credentials!"
            })
        }
        console.log(user );
        const isPassword =await bcrypt.compare(password, user.password);
        console.log("isPassword:",isPassword);
        
    if(!isPassword){

        return res.status(401).json({
            success:false,
            message:"invalied credentials!"
        });
    }

  

        res.status(200).json({
            success:true,
            message:"Logged in Succesfull!",
            isAuthenticated:true,
            user,
            token:"f123nfjko",
        });
    
        
    } catch (error) {
         res.status(500).json({
            success:false,
            message:error.message
        })
    }
    
}

exports.getAllUsers = async (req,res)=>{

   // console.log(req.cookies);

    try {
        const users =await User.find();
        if(!users){
            return res.status(500).json({
                success:false,
                message:"Users not found!"
             })
         }
         res.status(200).json({
            success:true,
            message:"Users fatched Successfully!",
            users,
         })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.getUser =async (req,res)=>{

    const {id} = req.params;
    try {
        const user =await User.findById(id)
        if(!user){
            return res.status(404).json({
                success:false,
                message:"user not found"
            })
        }
        res.status(200).json({
            success:true,
            user,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
 
}

exports.updateuser = async(req,res)=>{
    const {id} = req.params

    const {fullname, email}=req.body

    try {
        const user = await User.findById(id)
        if(!user){
            return res.status(404).json({
                success:false,
                message:"user not found"
            })
        }
        user.fullname = fullname;
        user.email = email;
        user.save();

        res.status(200).json({
            success:true,
            user,
            message:"user updated successfuly"
           
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
    
}

exports.deleteAcc =async (req,res)=>{
    const {id} = req.params;
    
    try {
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({
                success:false,
                user,
                message:"user not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"user delete succesfuly"

        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}




exports.newJob =async (req,res)=>{
    const {title,description, company_name,  experience,  qualification, salary,location,} = req.body;

    try {
        const newjob = await newJob.create({
            title,
            description,
            company_name,
            experience,
            qualification,
            salary,
            location,
        })
        if(!newjob){
            return res.status(500).json({
                success:false,
                message:"job added faild"
            })
        }
        res.status(201).json({
            success:false,
            message:"job added succesfully",
            newjob
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

    
        
  










