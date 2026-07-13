const express=require("express");
const app=express();
const router=require("./routes/userRoutes")
app.use(express.json())

const PORT=3000;

app.use("/users",router)


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})