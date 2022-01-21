const express = require("express");
const { registerStudent } = require("../controllers/studentRegister");
const router = express.Router();

router.route("/student-register").post(registerStudent);

module.exports = router;
