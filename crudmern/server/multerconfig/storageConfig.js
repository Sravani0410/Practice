const express = require("express");
const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
// const uploadDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir);
//   }

const storage = multer.diskStorage({
  destination:function (req, file, callback) {
    callback(null, "uploads");
  },

  filename: (req, file, callback) => {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // callback(null, uniqueSuffix + file.originalname);
      const filename = `image-${Date.now()}.${file.originalname}`;
      callback(null, filename);
  },
});
// filter

const filefilter = (req, file, callback) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
    return callback(new Error("Only .png .jpg & .jpeg formatted allowed"));
  }
};

const upload = multer({
  storage: storage,
  limit: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: filefilter
});

module.exports = upload;
