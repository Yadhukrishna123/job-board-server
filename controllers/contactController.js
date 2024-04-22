const contact = require("../models/ContactInfoModel")

exports.contactInfo =async (req,res)=>{
    const { first_name, last_name,  email, state, city, address, phone_number} = req.body;
     
    const resume = req.file.path

    console.log(resume);

    try {
        const contacts = await contact.create({
            first_name,
            last_name,
            email,
            state,
            city,
            address,
            phone_number,
            resume
        })
        if(!contacts){
            return res.status(501).json({
                success:false,
                message:"faild to submit"
            })
        }
        res.status(201).json({
            success:true,
            message:"successfully Upplyed",
            contacts
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

   
}