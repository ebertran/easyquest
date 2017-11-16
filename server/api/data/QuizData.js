const Quiz = require('./model/QuizModel')
// const User = require('./model/UserModel')

class QuizData {
    _normalize(quiz) {
        const { _id, user, title, author, field, description, version,
             private, allowedUsers, active, questions } = quiz

        return { id: _id, user, title, author, field, description, version,
            private, allowedUsers, active, questions }
    }

    list() {
        return Quiz.find()
            .then(quizs => quizs.map(quiz => this._normalize(quiz)))
    }

    retrieve(id) {
        return new Promise((resolve, reject) => {
            if (!id)
                throw new Error(`id cannot be ${id}`)

            Quiz.findById(id)
                .then(quiz => resolve(this._normalize(quiz)))
                .catch(reject)
        })
    }

}

module.exports = QuizData