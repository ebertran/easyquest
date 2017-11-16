const Quiz = require('./model/QuizModel')

class QuizData {
    _normalize(quiz) {
        const { _id, title, questions } = quiz

        return { id: _id, title, questions }
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

module.exports = quizData