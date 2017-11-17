const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = mongoose.model('Quiz')

const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  name: String,
  surname: String,
  
  quizs: [
    {
      id: String,
      // id: { type: Schema.ObjectId, ref: "Quiz" },
      answers: [Number]
    }
  ]
});

module.exports = mongoose.model("User", UserSchema);
