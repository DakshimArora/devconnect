const express=require("express");
const app=express();
const router=require("./routes/userRoutes")
const logger=require("./middleware/logger")
const dotenv=require("dotenv").config()
const connectDB=require("./config/db");
const e = require("express");
const authRouter = require("./routes/authRoutes");


app.use(express.json())
app.use(logger)

const PORT=process.env.PORT;

app.use("/users",router)
app.use("/auth",authRouter)

async function startServer(){
    await connectDB();
    app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
}
startServer().catch((error)=>{
    console.error(error);
})