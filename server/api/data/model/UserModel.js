const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  name: String,
  surname: String,
  birthdate: Date,
  sex: String,
  zipcode: String,
  studies: String,
  occupation: String,
  organization: String, 
  quizs: [
    {
      id: String,
      answers: [Number]
    }
  ]
});

module.exports = mongoose.model("User", UserSchema);