const express=require("express");
const app=express();
app.use(express.json())
const PORT=3000;
let users=[
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
app.put("/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>{
        return user.id===id;
    });
    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }
    if(req.body.name) user.name=req.body.name
    if(req.body.role) user.role=req.body.role
    res.json({
        message:"User updated successfully",
        user
    })
})
app.delete("/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>{
        return user.id===id
    })
    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }
    const newUsers=users.filter((user)=>{
        return user.id !== id
    })
    users=newUsers
    res.json({
        message:"User deleted successfully",
        deletedUser:user 
    })
})
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})