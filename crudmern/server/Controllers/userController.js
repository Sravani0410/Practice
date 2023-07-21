const users = require("../models/userSchema");
const moment = require("moment");
const fs = require("fs");

exports.userpost = async (req, res) => {
  //       console.log(req.file);
  //      console.log(req.body)
  const file = req.file.filename;
  const { fname, lname, email, mobile, gender, location, status } = req.body;

  if (
    !fname ||
    !lname ||
    !email ||
    !mobile ||
    !gender ||
    !location ||
    !status ||
    !file
  ) {
    res.status(401).json("All Inputs is required");
  }

  try {
     // here left side email is database and rightside email is user is entered
    const preuser = await users.findOne({ email: email });

    if (preuser) {
      res.status(401).json("This user already exist in our databse");
    } else {
      const datecreated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
// profile is schema name,image is under file but remaining the names has not need to make key value pair because both are same
      const userData = new users({
        fname,
        lname,
        email,
        mobile,
        gender,
        location,
        status,
        profile: file,
        datecreated,
      });
      await userData.save();
      res.status(200).json(userData);
    }
  } catch (error) {
    res.status(401).json(error);
    console.log("catch block error");
  }
};
// exports.userpost = async (req, res) => {
//   //    console.log(req.file);
//      console.log(req.body)
//   const file = req.file.filename;
//   const { fname, lname, mobile, email, gender, status, location,datecreated } = req.body;
//   if (
//     !fname ||
//     !lname ||
//     !mobile ||
//     !email ||
//     !gender ||
//     !status ||
//     !location ||
//     !file
//   ) {
//     res.status(401).json("ALL Inputs are Required");
//   }
//   try {
//     const peruser = await users?.findOne({ email:email });
//     if (peruser) {
//       res.status(401).json("This user is already is exists");
//     } else {
//       // const datecreatedString = req.body.datecreated;
//       // const datecreated = new Date(Date.parse(datecreatedString));

//       // if (isNaN(datecreated)) {
//       //   return res.status(400).json("Invalid date format for datecreated");
//       // }
//       // const datecreatedString = req.body.datecreated;
//       // const datecreated = moment(datecreatedString, "DD-MM-YYYY HH:mm:ss");

//       // if (!datecreated.isValid()) {
//       //   return res.status(400).json("Invalid date format for datecreated");
//       // }

//       // const date = moment(req.body.datecreated, "DD-MM-YYYY hh:mm:ss").toDate();
//       const date = moment(new Date()).format("DD-MM-YYYY hh:mm:ss");
//       // const date = moment().format('MMMM Do YYYY, h:mm:ss a');

//       // console.log("data fomate",date)
//       const userData =await users({
//         fname,
//         lname,
//         mobile,
//         email,
//         gender,
//         status,
//         location,
//         profile: file,
//         // datecreated:datecreated
//         // datecreated: date,
//       });
//       console.log("userData", userData);
//       await userData.save();
//       res.status(200).json(userData);
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(401).json(err);
//     console.log("catch block");
//   }
// };
