require("dotenv").config({ path: ".env" });
const express = require("express");
const cors = require("cors");
const studentRoute = require("./routes/studentRegister");
const privateRoute = require("./routes/private");
const authRoute = require("./routes/auth");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
//Connect DB
connectDB();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/", authRoute);
console.log("connected");
app.use("/student", studentRoute);
app.use("/private", privateRoute);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: err.message, data: data });
});
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged error:${err}`);
  server.close(process.exit(1));
});
