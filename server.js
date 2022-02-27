const app = require("./app");
const dotenv = require('dotenv');

const cloudinary = require("cloudinary");


const connectDatabase = require("./config/database")

//Handlling uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Server is Shut down due to undef variable");
    process.exit(1);
})


// Config
dotenv.config({path:"backend/config/config.env"})

connectDatabase();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const server = app.listen(process.env.PORT,()=>{

    console.log(`Server is Running on http://${process.env.PORT}`)
});



// Unhandled Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log(`Server is Shuting Down unhandled Promise Rejection`)

    server.close(() =>{
        process.exit(1);
    })
})  