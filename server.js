// step 1
const express = require("express");
//step 6
const connectDB = require("./config/connectDB");
// step 5
require("dotenv").config();

// step 8
const User = require("./models/User");

//Create Many Records with model.create()

// User.create(
//   [
//     { name: "mohamed", age: 4 },
//     { name: "walid", age: 5 },
//   ],
//   (err, data) =>
//     err
//       ? console.log("this error happened while creating docs ", err)
//       : console.log("data", data)
// );

// User find : find all docs in User collection

// User.find((err, data) =>
//   err ? console.log("err", err) : console.log("data :", data)
// );

// step 2 : app instance of express
const app = express();

// step 7
connectDB();

// step 3 : port
const port = 6000;

// step 4
app.listen(port, (err) =>
  err
    ? console.log(err)
    : console.log(`this server is running on port : ${port}`)
);
