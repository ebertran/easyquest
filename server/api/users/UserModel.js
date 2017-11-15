const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    surname: String,
    username: String,
    password: String,
    quizs: [{
        id:  String,
        answers:  [Number]
    }]
})

module.exports = mongoose.model('User', UserSchema)