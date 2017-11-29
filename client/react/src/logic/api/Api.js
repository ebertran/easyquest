const axios = require('axios')

class QuizApi {
    constructor(url) {
        this.quizsEndpoint = `${url}/quizs`
        this.usersEndpoint = `${url}/users`
    }

    createQuiz(quiz) {
        return axios.post(this.quizsEndpoint,quiz).then(({ data }) => data)
    }

    listQuizs() {
        return axios.get(this.quizsEndpoint).then(({ data }) => data)
    }

    addQuiz(userId, quizId, questions) {
        return axios.post(this.usersEndpoint).then(({ data }) => data)
    }

    retrieveQuiz(id) {
        return axios.get(this.quizsEndpoint, id).then(({ data }) => data)
    }

    listUsers() {
        return axios.get(this.usersEndpoint).then(({ data }) => data)
    }
}

module.exports = QuizApi