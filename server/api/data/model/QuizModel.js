const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema(
  {
    user: String,
    title: String,
    author: String,
    field: String,
    tags: String,
    description: String,
    version: String,
    // scope: Boolean,
    // allowedUsers: [String],
    // active: Boolean,
    dimension1: String,
    dimension2: String,
    dimension3: String,
    dimension4: String,
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
