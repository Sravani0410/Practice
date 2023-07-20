const users=require("../models/userSchema")
const moment =require("moment")
exports.userpost=async(req,res)=>{
//    console.log(req.file);
//    console.log(req.body)
const file=req.file.filename;
const {fname,lname,mobile,email,gender,status,location}=req.body
if(!fname || !lname || !mobile || !email || !gender || !status || !location || !file){
   res.send(401).json("ALL Inputs are Required")
}
try{
    // here left side email is database and rightside email is user is entered
  const peruser=await users.findOne({email:email})
  if(peruser){
    res.send(401).json("This user is already is exists")
  }
  else{
    const datecreated=moment(new Date()).format("DD-MM-YYYY hh:mm:ss")
    // profile is schema name,image is under file but remaining the names has not need to make key value pair because both are same
    const userData=new users({
        fname,lname,mobile,email,gender,status,location,profile:file,datecreated
    })
    await userData.save();
    res.status(200).json(userData)
  }
}
catch(err){
    res.status(401).json(err)
    console.log("catch block")
}
}