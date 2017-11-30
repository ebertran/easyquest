const axios = require('axios')

class QuizApi {
    constructor(url) {
        this.quizsEndpoint = `${url}/quizs`
        this.usersEndpoint = `${url}/users`
    }

    createQuiz(quiz) {
        return axios.post(this.quizsEndpoint, quiz).then(({ data }) => data)
    }

    listQuizs() {
        return axios.get(this.quizsEndpoint).then(({ data }) => data)
    }

    addSolvedQuizToUser(userId, quizId, questions) {
        return axios.post(`${this.usersEndpoint}/${userId}/quizs/${quizId}`, { questions }).then(({ data }) => data)
    }

    retrieveQuiz(id) {
        return axios.get(this.quizsEndpoint, id).then(({ data }) => data)
    }

    createUser(username,
        email,
        password,
        avatar,
        color,
        rex,
        name,
        surname,
        birthdate,
        sex,
        zipcode,
        studies,
        occupation,
        organization) {
        return axios.post(this.usersEndpoint, {
            username,
            email,
            password,
            avatar,
            color,
            rex,
            name,
            surname,
            birthdate,
            sex,
            zipcode,
            studies,
            occupation,
            organization
        }).then(({ data }) => data)
    }

    listUsers() {
        return axios.get(this.usersEndpoint).then(({ data }) => data)
    }

    login(username, password) {
        return axios.post(this.usersEndpoint + '/login', { username, password }).then(({ data }) => data)
    }
}

module.exports = QuizApi