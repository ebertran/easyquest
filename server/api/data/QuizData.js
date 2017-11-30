const Quiz = require('./model/QuizModel')

class QuizData {
    create(user, title, author, field, tags, description, version, questions) {
        return new Promise((resolve, reject) => {
            if (!user)
                throw new Error(`user cannot be ${user}`)
            
             if (!title)
                throw new Error(`author cannot be ${author}`)

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

            if (!questions)
                throw new Error(`questions cannot be ${questions}`)

            const quiz = new Quiz({ user, title, author, field, tags, description, version, questions })

            quiz.save()
                .then(resolve)
                .catch(reject)
        })
    }

    list() {
        return Quiz.find()
    }

    retrieve(id) {
        return new Promise((resolve, reject) => {
            if (!id)
                throw new Error(`id cannot be ${id}`)

            Quiz.findById(id).exec()
                .then(resolve)
                .catch(reject)
        })
    }

}

module.exports = QuizData