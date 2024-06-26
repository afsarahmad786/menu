const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://root:root@mongo.vr0w2vo.mongodb.net/testMenu"
    );
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
