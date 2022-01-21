const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewURLParser: true,

    useUnifiedTopology: true,
  });

  console.log("MongoDB connected");
};

module.exports = connectDB;
