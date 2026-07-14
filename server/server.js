const express=require("express");
const app=express();
const router=require("./routes/userRoutes")
const logger=require("./middleware/logger")

app.use(express.json())
app.use(logger)

const PORT=3000;

app.use("/users",router)


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})