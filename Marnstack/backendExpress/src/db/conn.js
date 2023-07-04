const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://fooddelivery:fooddelivery123@cluster0.x1grtaa.mongodb.net/Ecommerece"
  )
  .then((e) => {
    console.log("connecetd");
  })
  .catch((e) => {
    console.log("not connecrted");
  });
