const express=require("express")
const router=express.Router()
const {getUsers,getUserById,addUser,editUser,deleteUser}=require("../controllers/userController")
const validateUser=require("../middleware/validateUser")

router.get("/",getUsers)
router.get("/:id",getUserById)
router.post("/",validateUser,addUser)
router.put("/:id",editUser)
router.delete("/:id",deleteUser)

module.exports=router