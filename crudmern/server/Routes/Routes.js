const express =require("express");
const router=new express.Router();
const controllers=require("../Controllers/userController")
const upload =require("../multerconfig/storageConfig")
// routes

// here user_profile name is same in frontend
router.post("/user/register",upload.single("user_profile"),controllers.userpost)


module.exports=router