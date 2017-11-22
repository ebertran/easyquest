const Quiz = require('./model/QuizModel')
// const User = require('./model/UserModel')

class QuizData {
    _normalize(quiz) {
        const { _id, user, title, author, field, tags, description, version, scope, allowedUsers, active, questions } = quiz

        return { id: _id, user, title, author, field, tags, description, version, scope, allowedUsers, active, questions }
    }

    create(user, title, author, field, tags, description, version, scope, allowedUsers, active, questions) {
        return new Promise((resolve, reject) => {
            if (!user)
                throw new Error(`user cannot be ${user}`)
            
            if (!author)
                throw new Error(`author cannot be ${author}`)

            if (!field)
                throw new Error(`field cannot be ${field}`)

            if (!tags)
                throw new Error(`tags cannot be ${tags}`)

            if (!description)
                throw new Error(`description cannot be ${description}`)

            if (!version)
                throw new Error(`version cannot be ${version}`)

            if (!allowedUsers)
                throw new Error(`allowedUsers cannot be ${allowedUsers}`)

            if (!questions)
                throw new Error(`questions cannot be ${questions}`)
            
            if (typeof scope !== 'boolean')
                throw new Error(`scope cannot be ${scope}`)

            if (typeof active !== 'boolean')
                throw new Error(`active cannot be ${active}`)

            const quiz = new Quiz({ user, title, author, field, tags, description, version, scope, allowedUsers, active, questions })

            quiz.save()
                .then(quiz => resolve(this._normalize(quiz)))
                .catch(reject)
        })
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