const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
const { spawn } = require("child_process");
const fs = require("fs");
const Student = require("../models/Student.js");

exports.registerStudent = async (req, res, next) => {
  const { name, email, roll_no } = req.body;
  const image = req.body.image;
  console.log(req.body);
  const newStudentData = {
    name: name,
    email: email,
    roll_no: roll_no,
    image: image,
  };
  // console.log(img)
  // fs.writeFileSync(
  //   `./images/${name}.png`,
  //   img,
  //   { encoding: "base64" },
  //   function (err) {
  //     console.log("File created");
  //   }
  // );

  try {
    const newStudent = new Student(newStudentData);
    newStudent
      .save()
      .then(() => {
        res
          .status(201)
          .json({ message: "Student created successfully.", file: req.file });
      })
      .catch((err) => {
        res.status(400).json("Error creating student " + err.message);
      });
    // const user = await Student.create({
    //   name: name,
    //   email: email,
    //   roll_no: roll_no,
    //   image: image,
    //   // base64: img,
    // });
    // console.log(user);
    // res.status(201).json({ message: "Successful" });
    // sendToken(user, 201, res);
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
