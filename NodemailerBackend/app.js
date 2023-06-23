const express =require("express")
const app=express();
const PORT = 8007
const sendMail= require("./controllers/sendMail")

app.get("/",(req,res)=>{
   res.send("server is connected")
})
app.get("/mail",sendMail);

const server=async()=>{
    try{
      app.listen(PORT,()=>{
        console.log(`server is connected ${PORT}`)
      })
    }
    catch(err){
      console.log(err)
    }
}
server()