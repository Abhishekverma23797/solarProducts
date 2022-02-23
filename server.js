const app = require("./app");
const dotenv = require('dotenv');
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