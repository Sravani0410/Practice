require("dotenv").config();
const express=require("express")
const app=express();
require("./db/conn")
const cors=require("cors")
const router =require("./Routes/Routes")
const PORT=6010


app.use(cors());
app.use(express.json());
app.use(router);

app.get("/",(req,res)=>{
    res.status(201).json("server start")
})

app.listen(PORT,()=>{
    console.log(`Server is started at ${PORT}`)
})