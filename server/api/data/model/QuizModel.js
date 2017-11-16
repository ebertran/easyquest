const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuizSchema = new Schema({
    userId: String,
    title: String,
    questions: [{
        text:  String,
        answers:  [{
            text: String,
            dimension: String,
            value: Number
        }]
    }]
})

module.exports = mongoose.model('User', QuizSchema)