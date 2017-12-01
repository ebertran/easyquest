import Xtorage from "../utils/Xtorage";

class Logic {
  constructor() {
    this.api = new (require("./api/Api"))("http://localhost:3001/api")
    // this.quizApi = new(require('./api/QuizApi'))('https://desolate-bastion-53155.herokuapp.com/api')
  }

  getUser() {
    return Xtorage.session.getObject("user")
  }

  addQuiz(userId, quizId, questions) { }

  createQuiz(quiz) {
    quiz.user = this.getUser()._id;
    return this.api.createQuiz(quiz).then(({ data }) => data)
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
    organization
  ) {
    return this.api.createUser(username,
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
      organization).then(({ data }) => data)
  }

  listQuizs() {
    return this.api.listQuizs().then(({ data }) => data)
  }

  retrieveQuiz(quizId) {
    return this.listQuizs().then(quizs => {
      const [quiz] = quizs.filter(quiz => quiz._id === quizId)
      return quiz;
    });
  }

  listQuizsByUser() {
    return this.listQuizs().then(quizs =>
      quizs.filter(quiz => quiz.user === this.getUser()._id)
    );
  }

  listQuizsByTitle(query) {
    return this.listQuizs().then(quizs =>
      quizs.filter(quiz => {
        return (quiz.author.toLowerCase()).includes(query.toLowerCase()) || (quiz.title.split(' ').includes(query))
      })
    );
  }

  // listQuizsByAuthor(query) {
  //   return this.listQuizs().then(quizs =>
  //     quizs.filter(quiz => quiz.author === query)
  //   );
  // }

  listUsers() {
    return this.api.listUsers().then(({ data }) => data)
  }

  retrieveUser() {
    return this.listUsers().then(users => {
      const [user] = users.filter(user => user._id === this.getUser()._id)

      return user;
    });
  }

  listUsersByQuizs(id) {
    return this.listUsers().then(users => {
      const [user] = users.filter(user => user.quizs._id === id)

      return user;
    });
  }

  addSolvedQuizToUser(userId, quizId, questions) {
    console.log(quizId, 'ffffff')
    return this.api.addSolvedQuizToUser(userId, quizId, questions).then(({ data }) => data)
  }

  login(username, password) {
    return new Promise((resolve, reject) => {
      this.api.login(username, password)
        .then((result) => {
          if (!result || result.status === 'KO') throw new Error('login failed')

          Xtorage.session.setObject("user", result.data)

          resolve(result.data)
        })
        .catch(reject)
    })
  }
}

export default Logic;
