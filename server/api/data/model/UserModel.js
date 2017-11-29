const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  avatar: {
    dino: String,
    color: String
  },
  rex: Boolean,
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
      _id: { type: Schema.Types.ObjectId },
      questions: [
        {
          _id: { type: Schema.Types.ObjectId },
          answer: { type: Schema.Types.ObjectId }
        }
      ]
    }
  ]
});

module.exports = mongoose.model("User", UserSchema);