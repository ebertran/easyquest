class Logic {
    constructor() {
        this.api = new(require('./api/Api'))('http://localhost:3001/api')
        // this.quizApi = new(require('./api/QuizApi'))('https://desolate-bastion-53155.herokuapp.com/api')
    }

    createQuiz() {
        return this.api.createQuiz()
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

    listUsers() {
        return this.api.listUsers()
            .then(({data}) => data)
    }
}

export default Logic