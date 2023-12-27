var express = require("express");
// import express js module into the application
var app = express();
// we are initising the app using the express
// using app we are configure the route of "GET"  and path is "/"
// whenever request for this endpoint "/" --> "Hello world"
// middlewares:
/*
UI -> Request ->  hit the API   -> Middleware  -> Handler

1.Security check of user's token/access/authorization
2.Body parsing of the request 
3.sanitizaing data
4.Logged - most use case(whenever request comes to you, you have to logged which device made it,what was data is made it helps in debug)

middleware is set of functions/methods which gets called
ordering is most crucial thing

*/

app.use("/", (req, res, next) => {
  console.log("api is started");
  next();
});
app.get("/", (req, res, next) => {
  res.send("get the data");
  next();
});
app.get("/", (req, res) => {
  console.log("api is ended");
});
// we are starting the app at port 6666
// Node --> http.createServer
app.listen(6666);
