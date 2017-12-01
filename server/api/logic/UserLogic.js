const userData = new (require('../data/UserData'))

class UserLogic {
    login(username, password) {
        return new Promise((resolve, reject) => {
            if (!username) throw new Error(`username cannot be ${username}`)
            if (!password) throw new Error(`password cannot be ${password}`)

            userData.retrieveByUsername(username)
                .then(user => {
                    if (user.password === password) resolve(user)
                    else throw new Error(`login failed for username ${username}`)
                })
                .catch(reject)
        })
    }

    listByQuiz(quizId) {
        return userData.listByQuiz(quizId)
    }
}

module.exports = UserLogic