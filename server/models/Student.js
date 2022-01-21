const mongoose = require("mongoose");

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

// StudentSchema.pre("save", async function (next) {
//   const image = this.img;
//   const getEncodedArray = spawn("python", ["../scripts/test.py", image]);

//   getEncodedArray.stdout.on("data", (data) => {
//     this.img = data;
//     console.log(data);
//   });
//   next();
// });
const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
