const User=require("../models/user")

async function getUsers(req,res){
    try{
        const users=await User.find()
        res.json(users)
    }catch(error){
        res.status(500).json({
            message:"Internal server error"
        })
    }
}
async function getUserById(req,res){
    try{
        const id=req.params.id;
        const user=await User.findById(id);
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        res.json(user)
    }catch(error){
        res.status(500).json({
            message:"Internal server error"
        })
    }
}


async function addUser(req,res){
    try{
        const newUser={
            name:req.body.name,
            role:req.body.role
        }
        const createdUser=await User.create(newUser);
        res.json({
            message:"User added successfully",
            createdUser
        })
    }catch(error){
        res.status(500).json({
            message:"Internal server error"
        })
    }
}
async function editUser(req,res){
    try{
        const id=req.params.id;
        const user=await User.findByIdAndUpdate(
            id,
            {
                name:req.body.name,
                role:req.body.role
            },
            {
                new:true
            }
        );
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        
        res.json({
            message:"User updated successfully",
            user
        })
    }catch(error){
        res.status(500).json({
            message:"Internal server error"
        })
    }
}
async function deleteUser(req,res){
    try{
        const id=req.params.id;
        const user=await User.findByIdAndDelete(id)
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        res.json({
            message:"User deleted successfully",
            user
        })
    }catch(error){
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

module.exports={
    getUsers,
    getUserById,
    addUser,
    editUser,
    deleteUser
};