import Xtorage from '../utils/Xtorage'

class Logic {
    constructor() {
        Xtorage.session.setObject('user', { _id: '5a04c5ae1d195c4e88dbfcab' })

        this.api = new(require('./api/Api'))('http://localhost:3001/api')
        // this.quizApi = new(require('./api/QuizApi'))('https://desolate-bastion-53155.herokuapp.com/api')
    }

    getUser() {
        return Xtorage.session.getObject('user')
    }

    createQuiz(quiz) {
        quiz.user = this.getUser()._id
        return this.api.createQuiz(quiz)
            .then(({data}) => data)
    }

    createUser() {
        return this.api.createUser()
            .then(({data}) => data)
    }


    listQuizs() {
        return this.api.listQuizs()
            .then(({data}) => data)
    }

    listUserQuizs() {
        return this.listQuizs()
            .then(quizs => quizs.filter(quiz => quiz.user === this.getUser()._id))
    }

    listUsers() {
        return this.api.listUsers()
            .then(({data}) => data)
    }
}

export default Logic