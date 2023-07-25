require("dotenv").config();
const express=require("express")
const app=express();
require("./db/conn")
const cors=require("cors")
const router =require("./Routes/Routes")
const PORT=6012


app.use(cors());
app.use(express.json());
// whenever we call the uploads that means we have to show the uploads folder data ----> according to frontend
app.use("/uploads",express.static("./uploads"))
app.use(router);

app.get("/",(req,res)=>{
    res.status(201).json("server start")
})

app.listen(PORT,()=>{
    console.log(`Server is started at ${PORT}`)
})