const { connect } = require("mongoose");
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await connect(process.env.MONGODB_HOST);

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
