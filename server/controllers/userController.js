let users=require("../data/users")

function getUsers(req,res){
    res.json(users)
}
function getUserById(req,res){
    const id=Number(req.params.id);
    const user=users.find((user)=>{
        return user.id===id;
    })
    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }
    res.json(user)
}
function addUser(req,res){
    const newUser={
        id:users.length + 1,
        name:req.body.name,
        role:req.body.role
    }
    users.push(newUser)
    res.json({
        message:"User added successfully",
        newUser
    })

}
function editUser(req,res){
    const id=Number(req.params.id);
    const user=users.find((user)=>{
        return user.id===id
    })
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
}
function deleteUser(req,res){
    const id=Number(req.params.id);
    
    const index=users.findIndex((user)=>{
        return user.id===id
    })

    if(index===-1) return res.status(404).json({
        message:"User not found"
    })
    const deletedUser=users.splice(index,1)      // does not create a new array, makes changes in the original array itself
    res.json({
        message:"User deleted successfully",
        deletedUser
    })
}

module.exports={
    getUsers,
    getUserById,
    addUser,
    editUser,
    deleteUser
};