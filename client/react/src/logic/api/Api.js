const axios = require('axios')

class QuizApi {
    constructor(url) {
        this.quizsEndpoint = `${url}/quizs`
        this.usersEndpoint = `${url}/users`
    }

    createQuiz() {
        return axios.post(this.quizsEndpoint).then(({ data }) => data)
    }

    listQuizs() {
        return axios.get(this.quizsEndpoint).then(({ data }) => data)
    }

    retrieveQuiz(id) {
        return axios.get(this.quizsEndpoint, id).then(({ data }) => data)
    }

    listUsers() {
        return axios.get(this.usersEndpoint).then(({ data }) => data)
    }
}

module.exports = QuizApi