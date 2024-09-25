const mongoose = require("mongoose");

const uri =
  "mongodb+srv://danhmuto:hayquenlamon1@cluster0.8futn.mongodb.net/sdn_ass1";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connect database successful");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
