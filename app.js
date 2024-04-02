const express = require("express")
const app = express();
const cors = require("cors")
//const path = require("path")






app.use(cors({
    credentials:true,
    origin:true
}));


app.use(express.urlencoded({extended:true}));
app.use(express.json());

const sampleMiddleware = (req,res,next)=>{
    console.log("middleware");
    next()
}
app.use(sampleMiddleware); 

module.exports = app;