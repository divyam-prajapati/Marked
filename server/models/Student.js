const mongoose = require("mongoose");
const { spawnSync } = require("child_process");
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
  },
  base64: {
    type: String,
    required: true,
  },
});

// function sleep(milliseconds) {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }

StudentSchema.pre("save", async function (next) {
  const imgName = this.name;
  console.log(imgName);
  const getEncodedArray = spawnSync("python", ["./scripts/input.py", imgName],{
    encoding:"utf8"
  });
  let x = getEncodedArray.stdout
  x = x.substring(8,x.length-5)
  // console.log(x)
  x = x.split('\n ')
  console.log(x)

  this.encoded_array = x
  console.log(getEncodedArray.stdout)
  console.log(getEncodedArray.stderr)
  console.log(getEncodedArray.status) 
  
  
  next();
});



// function sh(getEncodedArray) {
//   sleep(10000)
//   return new Promise(resolve => {
//     let returnValue = "";
      
//       getEncodedArray.stdout.on("data", (res) => {
//         returnValue += res;
//         console.log(res.toString());
//       });
//       getEncodedArray.stderr.on("data", (data) => {
//         console.error(`stderr: ${data}`);
//       });
    
//       getEncodedArray.on("close", (code) => {
//         console.log(`child process exited with code ${code}`);
//       });
//       // sleep(10000)
//       console.log(returnValue)
//       resolve(returnValue);
//   })
// }

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
