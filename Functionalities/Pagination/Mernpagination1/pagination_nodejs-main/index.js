const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);

const mongodbUri =
  "mongodb+srv://practice:practice123@cluster0.dkab0a7.mongodb.net/pagination";

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongodb...");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongo", err);
});

app.listen(4001, () => {
  console.log("App is running on PORT 4001");
});
