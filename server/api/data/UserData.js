const User = require('./model/UserModel')

class UserData {
    _normalize(user) {
        const { _id, username, password, email, name, surname, birthdate, sex, zipcode, studies, ocupation, organization, quizs } = user

        return { id: _id, username, password, email, name, surname, birthdate, sex, zipcode, studies, ocupation, organization, quizs }
    }

    list() {
        return User.find()
            .then(users => users.map(user => this._normalize(user)))
    }

    retrieve(id) {
        return new Promise((resolve, reject) => {
            if (!id)
                throw new Error(`id cannot be ${id}`)

            User.findById(id)
                .then(user => resolve(this._normalize(user)))
                .catch(reject)
        })
    }

}

module.exports = UserData