const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const User = mongoose.model('User')

const QuizSchema = new Schema(
  {
    user: String,
    // user: { type: Schema.ObjectId, ref: "User" },
    title: String,
    author: String,
    field: String,
    tags: [String],
    description: String,
    version: String,
    scope: String,
    allowedUsers: [String],
    // allowedUsers: [{ type: Schema.ObjectId, ref: "User" }],
    active: Boolean,
    questions: [
      {
        text: String,
        answers: [
          {
            text: String,
            dimension: String,
            value: Number
          }
        ]
      }
    ]
  },
  { collection: "quizs" }
);

module.exports = mongoose.model("Quiz", QuizSchema);
