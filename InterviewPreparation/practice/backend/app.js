var express = require("express");
// import express js module into the application


var app = express();
// we are initising the app using the express

// from routes we have to import
var users=require("./routes/users")
var products=require("./routes/products")
// using app we are configure the route of "GET"  and path is "/"
// whenever request for this endpoint "/" --> "Hello world"
/*
app-->initise of express
get---> it is type of http methods

different http methods are 
GET
POST
PUT
PATCH
DELETE

then call the url i.e., "/" it will be anything --> when we hit the url endpoint then callback mechanism will call i.e, (req,res) 

  app.get("/",(req,res)=>{
    // request captured as input
    // response as output
  })

*/
app.use('/users',users)
app.use("/products",products)
app.get("/read-all-users", (req, res) => {
  res.send("List Of Users");
});
app.get("/read-users-details", (req, res) => {
    const userObj={
        id:1,
        name:"sravani",
        lastname:"pyla",
        status:true
    }
  res.send(userObj);
});

// if we are using all the routes here the code is messy. for that we are using moduler approach using folder called routes




// we are starting the app at port 6666
// Node --> http.createServer
app.listen(6666);

