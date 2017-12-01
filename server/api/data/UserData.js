const User = require("./model/UserModel")

class UserData {
  create(
    username,
    password,
    avatar,
    color,
    email,
    name,
    surname,
    birthdate,
    sex,
    zipcode,
    education,
    occupation,
    organization
  ) {
    return new Promise((resolve, reject) => {
      if (!username) throw new Error(`username cannot be ${username}`)

      if (!password) throw new Error(`password cannot be ${password}`)

      if (!avatar) throw new Error(`avatar cannot be ${avatar}`)

      if (!color) throw new Error(`color cannot be ${color}`)

      if (!email) throw new Error(`email cannot be ${email}`)

      if (!name) throw new Error(`name cannot be ${name}`)

      if (!surname) throw new Error(`surname cannot be ${surname}`)

      if (!birthdate) throw new Error(`birthdate cannot be ${birthdate}`)

      if (!sex) throw new Error(`sex cannot be ${sex}`)

      if (!zipcode) throw new Error(`zipcode cannot be ${zipcode}`)

      if (!education) throw new Error(`education cannot be ${education}`)

      if (!occupation) throw new Error(`occupation cannot be ${occupation}`)

      if (!organization) throw new Error(`organization cannot be ${organization}`)

      const user = new User({
        username,
        password,
        avatar,
        color,
        email,
        name,
        surname,
        birthdate,
        sex,
        zipcode,
        education,
        occupation,
        organization
      })

      user
        .save()
        .then(resolve)
        .catch(reject)
    })
  }

  searchUsers(query) {
    return User.filter(user => user.username.includes(query))
  }

  list() {
    return User.find()
  }

  listByQuiz(quizId) {
    return this.list()
      .then(users => {
        if (!users || users.length === 0) return users

        const found = users.filter(user => {
          if (user.quizs)
            for (let i = 0; i < user.quizs.length; i++) {
              if (user.quizs[i].id === quizId) return true
            }
    
          return false
        })

        return found
      })
  }

  retrieve(id) {
    return new Promise((resolve, reject) => {
      if (!id) throw new Error(`id cannot be ${id}`)

      User.findById(id)
        .then(resolve)
        .catch(reject)
    })
  }

  retrieveByUsername(username) {
    return new Promise((resolve, reject) => {
      if (!username) throw new Error(`username cannot be ${username}`)

      User.findOne({ username })
        .then(user => {
          if (!user) throw new Error(`user not found ${username}`)
          else resolve(user)
        })
        .catch(reject)
    })
  }

  addSolvedQuiz(userId, quizId, questions) {
    return new Promise((resolve, reject) => {
      if (!userId) throw new Error(`userId cannot be ${userId}`)
      if (!quizId) throw new Error(`quizId cannot be ${quizId}`)
      if (!questions) throw new Error(`questions cannot be ${questions}`)

      return User.findByIdAndUpdate(userId, {
        $push: {
          quizs:
            {
              _id: quizId,
              questions
            }
        }
      })
        .then(() => {
          return this.retrieve(userId)
        })
        .then(resolve)
        .catch(reject)
    })
  }
}

module.exports = UserData;
