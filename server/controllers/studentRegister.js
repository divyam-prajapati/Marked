const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
const { spawn } = require("child_process");

const Student = require("../models/Student.js");

exports.registerStudent = async (req, res, next) => {
  const { name, email, roll_number, img } = req.body;

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

const sendToken = (user, statusCode, res) => {
  const token = "oof";
  res.status(statusCode).json({
    success: true,
    token,
  });
};
