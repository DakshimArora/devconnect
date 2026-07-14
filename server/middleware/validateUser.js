function validateUser(req,res,next){
    if(!req.body.name || !req.body.role){
        return res.status(400).json({
            message:"Name and role are required"
        })
    }
    next()
}
module.exports=validateUser