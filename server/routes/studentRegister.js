const express = require("express");
const multer = require("multer");
const cors = require("./cors");
const { registerStudent } = require("../controllers/studentRegister");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const imageFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|gif|png|svg)$/)) {
    return cb(new Error("You can only upload image files"), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter });

router.route("/student-register").post(upload.single("image"), registerStudent);

module.exports = router;
