const app = require("./app");
const dotenv = require('dotenv');
const connectDatabase = require("./config/database")
// Config
dotenv.config({path:"backend/config/config.env"})

connectDatabase();


const server = app.listen(process.env.PORT,()=>{

    console.log(`Server is Running on http://${process.env.PORT}`)
});
