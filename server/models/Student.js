const mongoose = require("mongoose");
const { spawn } = require("child_process");
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  email: {
    type: String,
    required: [true, "Please provide email address"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  roll_no: {
    type: String,
    unique: true,
  },
  encoded_array: {
    type: Array,
    required: true,
  },
});

StudentSchema.pre("save", async function (next) {
  const imgName = this.name;
  console.log(imgName);
  const getEncodedArray = spawn("python", ["./scripts/input.py", imgName]);

  getEncodedArray.stdout.on("data", (data) => {
    this.encoded_array = data;
    console.log(data.toString());
  });
  getEncodedArray.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  getEncodedArray.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });

  next();
});
const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
