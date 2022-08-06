// step 1
const mongoose = require("mongoose");
//step2
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database is connected");
  } catch (err) {
    console.log(err);
  }
};

//step3
module.exports = connectDB;
