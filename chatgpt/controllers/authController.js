const errorHandler = require("../middlewares/errorMiddleware");
const userModel = require("../models/userModel");
const errorResponse = require("../utils/errorResponse");
// JWT Token
exports.sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken(res);
  res.status(statusCode).json({
    success: true,
    token,
  });
};
// register
exports.registerController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    // validation
    const existingemail = await userModel.findOne({ email });
    if (existingemail) {
      return next(new errorResponse("email is already registered", 500));
    }
    const user = await userModel.create({ username, email, password });
    this.sendToken(user, 201, res);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// Login
exports.loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //   validation
    if (!email || !password) {
      return next(new errorResponse("Please provide email or password"));
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return next(new errorResponse("Invalid Creditial", 401));
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return next(new errorResponse("Invalid Creditial", 401));
    }
    // res
    this.sendToken(user, 200, res);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// logout
exports.logoutController = async (req, res) => {
  res.clearCookie("refreshToken");
  return res.status(200).json({
    success: true,
    message: "Logout successfully",
  });
};
