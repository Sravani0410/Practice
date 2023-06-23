require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/router");

const port = 8006;

app.use(express.json());
// app.use(cors());
app.use(router);
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}));

app.listen(port, () => {
  console.log(`server start at port no:${port}`);
});
