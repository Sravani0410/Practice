// mongodb+srv://crudmern:crudmern123@cluster0.ngivqfw.mongodb.net/
const mongoose = require("mongoose");
const DB = process.env.DATABASE
mongoose.set("strictQuery", false);
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})
// mongoose
//   .connect(DB)
//   .then(() => {
//     console.log("database is connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// mongoose
//   .connect(DB, {
//     // useNewUrlParser: true,
//     // useCreateIndex: true,
//     // useUnifiedTopology: true,
//   })
//   .then(() => console.log("Database Connected"))
//   .catch((err) => console.log(err));


