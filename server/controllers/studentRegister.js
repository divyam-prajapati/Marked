const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
const { spawn } = require("child_process");
const fs = require("fs");
const Student = require("../models/Student.js");

exports.registerStudent = async (req, res, next) => {
  const { name, email, roll_number, img } = req.body;

  fs.writeFileSync(
    `./images/${name}.png`,
    img,
    { encoding: "base64" },
    function (err) {
      console.log("File created");
    }
  );

  try {
    const user = await Student.create({
      name,
      email,
      roll_number,
      encoded_array: img,
    });
    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = "oof";
  res.status(statusCode).json({
    success: true,
    token,
  });
};
