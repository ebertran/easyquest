const User = require('./model/UserModel')

class UserData {
    _normalize(user) {
        const { _id, username, password, email, name, surname, birthdate, sex, zipcode, studies, ocupation, organization, quizs } = user

        return { id: _id, username, password, email, name, surname, birthdate, sex, zipcode, studies, ocupation, organization, quizs }
    }

    create(username, password, email, name, surname, birthdate, sex, zipcode, studies, ocupation, organization) {
        return new Promise((resolve, reject) => {
            if (!username)
                throw new Error(`username cannot be ${username}`)
            
            if (!password)
                throw new Error(`password cannot be ${password}`)

            if (!email)
                throw new Error(`email cannot be ${email}`)

            if (!name)
                throw new Error(`name cannot be ${name}`)

            if (!surname)
                throw new Error(`surname cannot be ${surname}`)


            const user = new User({ username, password, email, name, surname, birthdate, sex, zipcode, studies, ocupation, organization})

            user.save()
                .then(user => resolve(this._normalize(user)))
                .catch(reject)
        })
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