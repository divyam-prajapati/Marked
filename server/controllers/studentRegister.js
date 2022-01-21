const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
const { spawn } = require("child_process");

const Student = require("../models/Student.js");

exports.registerStudent = async (req, res, next) => {
  const { name, email, roll_number, img } = req.body;
  const x = encodedArray(img);
  try {
    const user = await Student.create({
      name,
      email,
      roll_number,
      encoded_array: x,
    });

    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

const encodedArray = (image) => {
  let Ec;
  console.log(image);
  let getEncodedArray = spawn("python", ["./test.py", image]);

  getEncodedArray.stdout.on("data", (data) => {
    console.log(data);
    Ec = data;
  });
  getEncodedArray.stderr.on("data", (data) => {
    console.log(toString(data));
  });

  getEncodedArray.on("close", (code) => {
    console.log(code);
  });
  return Ec;
};
const sendToken = (user, statusCode, res) => {
  const token = "gaandmara";
  res.status(statusCode).json({
    success: true,
    token,
  });
};
