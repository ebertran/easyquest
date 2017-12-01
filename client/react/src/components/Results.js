import React, { Component } from "react";

import Logic from "../logic/Logic";
const logic = new Logic();

class Results extends Component {
    constructor() {
        super();
        this.state = {
            quizId: "",
            users: []
        };
    }

    componentDidMount() {
        const quizId = this.props.match.params.quizId

        logic.listUsersByQuiz(quizId)
            .then(users => {
              this.setState({ users })
            })
            .catch(console.error)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div>
                        <div className="col-sm-12">
                            <section className="panel panel-reverse">
                                <div>
                                    <nav className="panel-heading navbar navbar-default navbar-center">
                                        <ul className="nav navbar-nav">
                                            <li>
                                                <a href="#">
                                                    <h1>Results of Quiz</h1>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="panel-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12 user-tests-box row">
                                                {this.state.users.map((user, index) => {
                                                    return (
                                                        <ul key={index}>
                                                            <li className="_user-results">{user.username}</li>
                                                            <li className="_user-results">{user.birthdate}</li>
                                                            <li className="_user-results">{user.sex}</li>
                                                            <li className="_user-results">{user.zipcode}</li>
                                                            <li className="_user-results">{user.eduaction}</li>
                                                            <li className="_user-results">{user.occupation}</li>
                                                            <li><br/></li>
                                                            {user.quizs.map((quiz, index) => {
                                                                return this.getQuizResults(quiz, index)
                                                            }
                                                            )}
                                                        </ul>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getQuizResults(quiz, index) {
      return <li key={index} className="_user-results">
        <b>{quiz.info.title}</b><br/>
        {quiz.questions.map(question => {
            let title

            for (let i = 0; i < quiz.info.questions.length; i++) {
              const _question = quiz.info.questions[i]

              if (question._id === _question._id) {
                return this.getQuestionResults(question, _question)
              }
            }
        })}
      </li>
    }

    getQuestionResults(question, _question) {
      return <span>
        <i>{_question.text}</i><br/>
        { this.getAnswer(question.answer, _question.answers) }
        <br/>
      </span>
    }

    getAnswer(answerId, answers) {
       for (let i = 0; i < answers.length; i++) {
         const answer = answers[i]

         if (answerId === answer._id) {
           return <strong>{answer.text}</strong>
         }
       }
    }
}



export default Results;
