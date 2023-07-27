const users = require("../models/userSchema");
const moment = require("moment");
const csv = require("fast-csv");
const fs = require("fs");

//post--> register user
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

// get--->users get deatils

exports.userget = async (req, res) => {
  // search functionality
  const search = req.query.search || "";
  // console.log("req",req.query)
  const filterGender = req.query.filtergender || "";
  const status = req.query.status || "";
  const sort = req.query.sort || "";
  const page = req.query.page || 1;
  const ITEM_PER_PAGE = 2;
  const query = {
    // search by fname if we want email or lname we can search in place of fname.
    // here regex will do is it will search and $options:"i" ===> it will any letter will consider as capital and small
    fname: {
      $regex: search,
      $options: "i",
    },
  };
  if (filterGender !== "All") {
    query.gender = filterGender;
  }
  if (status !== "All") {
    query.status = status;
  }

  try {
    // console.log("req data",req.query)
    const skip = (page - 1) * ITEM_PER_PAGE; // 0*4 =0, 1*4 =4
    const count = await users.countDocuments(query); //total data
    // console.log("count========>",count)
    // here query is passed under find(query) ===> because of search,gender,status
    const usersdata = await users
      .find(query)
      .sort({ datecreated: sort == "new" ? -1 : 1 })
      .limit(ITEM_PER_PAGE) //per page how many data we have to show
      .skip(skip); // how many data are skip in particular data
    const pageCount = Math.ceil(count / ITEM_PER_PAGE); // 4/2=2

    res.status(200).json({
      Pagination: {
        count,
        pageCount,
      },
      usersdata,
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

// single user get

exports.singleuserget = async (req, res) => {
  const { id } = req.params;
  try {
    const userdata = await users.findOne({ _id: id });
    res.status(200).json(userdata);
  } catch (err) {
    res.status(401).json(err);
  }
};

// update --->user edit

exports.useredit = async (req, res) => {
  const { id } = req.params;
  // user_profile is written in register because here we have to update existing user_profile
  const {
    fname,
    lname,
    email,
    mobile,
    gender,
    location,
    status,
    user_profile,
  } = req.body;
  const file = req.file ? req.file.filename : user_profile;
  const dateupdated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
  try {
    const updateuser = await users.findByIdAndUpdate(
      { _id: id },
      {
        fname,
        lname,
        email,
        mobile,
        gender,
        location,
        status,
        profile: file,
        dateupdated,
      },
      {
        new: true,
      }
    );
    await updateuser.save();
    res.status(200).json(updateuser);
  } catch (err) {
    res.status(401).json(err);
  }
};

// delete---> delete user

exports.userDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteuser = await users.findByIdAndDelete({ _id: id });
    res.status(200).json(deleteuser);
  } catch (err) {
    res.status(401).json(err);
  }
};

// change the status

// exports.userstatus = async (req, res) => {
//   const { id } = req.params;
//   const  data  = req.body;
//   console.log("data", data);
//   try {
//     const userstatusupdate = await users.findByIdAndUpdate(
//       { _id: id },
//       { status: data },
//       { new: true }
//     );
//     console.log("userstatusupdate", userstatusupdate?.status);
//     res.status(200).json(userstatusupdate);
//   } catch (err) {
//     res.status(401).json(err);
//   }
// };

exports.userstatus = async (req, res) => {
  const { id } = req.params;
  // here this status is coming from frontend
  const { status } = req.body;
  // console.log("req.body", req.body);
  // console.log("data", status);
  try {
    const userstatusupdate = await users.findByIdAndUpdate(
      { _id: id },
      { status: status },
      { new: true }
    );
    res.status(200).json(userstatusupdate);
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.userExport = async (req, res) => {
  try {
    const usersdata = await users.find();
    const csvStream = csv.format({ headers: true });
    if (!fs.existsSync("public/files/export")) {
      if (!fs.existsSync("public/files")) {
        fs.mkdirSync("public/files/");
      }
      if (!fs.existsSync("public/files/export")) {
        fs.mkdirSync("./public/files/export/");
      }
    }
    // if we want to get or read in csv in node ---> for that we have to use stream
    // createWriteStream--> beacuse here we want to write(create the stream)
    const writablestream = fs.createWriteStream(
      "public/files/export/users.csv"
    );
    csvStream.pipe(writablestream);
    writablestream.on("finish", function () {
      // res.json({
      //   downloadUrl: `http://localhost:6012/files/export/users.csv`,
      // });
      res.status(200).json({
        downloadUrl: `http://localhost:6012/files/export/users.csv`,
      });
    });
    // value are set in csv
    if (usersdata.length > 0) {
      usersdata.map((user) => {
        csvStream.write({
          FirstName: user.fname ? user.fname : "-",
          LastName: user.lname ? user.lname : "-",
          Email: user.email ? user.email : "-",
          Phone: user.email ? user.mobile : "-",
          Gender: user.email ? user.gender : "-",
          Status: user.email ? user.status : "-",
          Profile: user.email ? user.profile : "-",
          Location: user.email ? user.location : "-",
          DateCreated: user.email ? user.datecreated : "-",
          DateUpdated: user.email ? user.dateupdated : "-",
        });
      });
    }
    csvStream.end();
    writablestream.end();
  } catch (err) {
    res.status(401).json(err);
  }
};
