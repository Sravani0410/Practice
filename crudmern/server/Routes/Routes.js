const express =require("express");
const router=new express.Router();
const controllers=require("../Controllers/userController")
const upload =require("../multerconfig/storageConfig")
// routes

// here user_profile name is same in frontend
router.post("/register",upload.single("user_profile"),controllers.userpost);
router.get("/userdetails",controllers.userget)
router.get("/userdetails/:id",controllers.singleuserget)
router.put("/useredit/:id",upload.single("user_profile"),controllers.useredit)
router.delete("/userdelete/:id",controllers.userDelete)
module.exports=router