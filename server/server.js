const express=require("express");
const app=express();
app.use(express.json())
const PORT=3000;
const users=[
    {
        id:1,
        name:"dakshim",
        role:"frontend-dev"
    },
    {
        id:2,
        name:"Rahul",
        role:"backend-dev"
    },
    {
        id:3,
        name:"aman",
        role:"fullstack-dev"
    }
];
app.get("/users",(req,res)=>{
    res.json(users)
})
app.get("/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>{
        return user.id===id;
    });
    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }
    res.json(user);
})
app.post("/users",(req,res)=>{
    const newUser={
        id:users.length + 1,
        name:req.body.name,
        role:req.body.role
    };
    users.push(newUser);
    res.status(201).json({
        message:"User received",
        user:newUser
    })
})
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})