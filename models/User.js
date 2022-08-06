// const mongoose = require("mongoose");
// mongoose : { ...methods of mongoose : exp : Schema , model }
// mongoose.Schema , mongoose.model
// destructuring : Schema , model
const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
});

module.exports = User = model("User", userSchema);
