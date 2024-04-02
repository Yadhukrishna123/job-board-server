const dotenv = require("dotenv")
const app = require("./app")
const databaseConnection = require("./config/databaseConnection")

dotenv.config({path:"./config/config.env"})  
databaseConnection();

const userRoutes = require("./routes/userRoutes")
const upplyedUserRouts = require("./routes/JobRouts")




app.use("/api/v1", userRoutes)
app.use("/api/v1",upplyedUserRouts)








app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})
