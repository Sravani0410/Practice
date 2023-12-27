var express = require("express");
var router = express.Router();

/*
1.Dynamic URLs in our modules
2.we can pass 1 or more params in the url
3.we collect the data using req.params. <variable>

*/
router.get("/", (req, res) => {
  res.send("get request  for users");
});

router.get("/get-user", (req, res) => {
  res.send("get request  for all users");
});

router.get("/get-user/:id", (req, res) => {
  res.send("get request  for all users" + req.params.id);
});
router.get("/search-by-user/:name/:email", (req, res) => {
  res.send("get request  for all users" + req.params.name + req.params.email);
});
router.get("/search/:key([0-9]{4})", (req, res) => {
  res.send("Data capatured" + req.params.key);
});
router.get("/search-username/:key([a-zA-Z]{5})", (req, res) => {
  res.send("Data capatured" + req.params.key);
});

//   wild card url
router.get("*", (req, res) => {
    var resObj={
        statuscode:404,
        msg:"URL Not Found"
    }
  res.send(resObj);
});

router.post("/create-user", (req, res) => {
  res.send("Create users");
});
router.put("/update-user", (req, res) => {
  res.send("Update users");
});
router.delete("/delete-user", (req, res) => {
  res.send("Delete users");
});

module.exports = router;
