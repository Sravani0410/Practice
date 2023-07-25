const users = require("../models/userSchema");
const moment = require("moment");
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
  try {
    const usersdata = await users.find();
    res.status(200).json(usersdata);
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
