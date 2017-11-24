class Logic {
    constructor() {
        this.api = new(require('./api/Api'))('http://localhost:3000/api')
        // this.quizApi = new(require('./api/QuizApi'))('https://desolate-bastion-53155.herokuapp.com/api')
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