const contact = require("../models/coModel")

exports.contactInfo = (req,res)=>{
    const {first_name, last_name, email, state, city,  address, phone_number} = req.body;

    const cv= req.file;
    
    console.log(cv);

    res.send("DONE")
}