import Xtorage from "../utils/Xtorage";

class Logic {
  constructor() {
    Xtorage.session.setObject("user", { _id: "5a04c5ae1d195c4e88dbfcab" });

    this.api = new (require("./api/Api"))("http://localhost:3001/api");
    // this.quizApi = new(require('./api/QuizApi'))('https://desolate-bastion-53155.herokuapp.com/api')
  }

  getUser() {
    return Xtorage.session.getObject("user");
  }

  addQuiz(userId, quizId, questions) {}

  createQuiz(quiz) {
    quiz.user = this.getUser()._id;
    return this.api.createQuiz(quiz).then(({ data }) => data);
  }

  createUser() {
    return this.api.createUser().then(({ data }) => data);
  }

  listQuizs() {
    return this.api.listQuizs().then(({ data }) => data);
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

  listQuizsByAuthor(query) {
    return this.listQuizs().then(quizs =>
      quizs.filter(quiz => quiz.author === query)
    );
  }

  // const list = this.state.users
  // .filter(d => this.state.input === '' || d.includes(this.state.input))

  listUsers() {
    return this.api.listUsers().then(({ data }) => data);
  }

  retrieveUser() {
    return this.listUsers().then(users => {
      const [user] = users.filter(user => user._id === this.getUser()._id);

      return user;
    });
  }

  addSolvedQuizToUser(userId, quizId, questions) {
    return this.api.addSolvedQuizToUser(userId, quizId, questions).then(({ data }) => data);
  }
}

export default Logic;
