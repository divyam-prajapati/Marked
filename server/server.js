require("dotenv").config({ path: ".env" });
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
//Connect DB
connectDB();
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use("/", require("./routes/auth"));
app.use("/student", require("./routes/studentRegister"));
app.use("/private", require("./routes/private"));
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged error:${err}`);
  server.close(process.exit(1));
});
