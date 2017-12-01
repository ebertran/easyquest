import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Logic from "../logic/Logic";
const logic = new Logic();

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quizId: "",
      questions: [],
      currentPosition: 0,
      answers: [],
      i: -1,
      submitResults: false,
      quizFinished: false,
      actualItem: {
        question: "",
        questionId: "",
        answer1: "",
        answer1Id: "",
        answer2: "",
        answer2Id: ""
      }
    };
  }

  componentDidMount() {
    const quizId = this.props.match.params.id
    logic
      .retrieveQuiz(quizId)
      .then(questions => {
        this.setState(prevState => ({
          quizId,
          questions: questions.questions,
          actualItem: {
            question: questions.questions[0].text,
            questionId: questions.questions[0]._id,
            answer1: questions.questions[0].answers[0].text,
            answer1Id: questions.questions[0].answers[0]._id,
            answer2: questions.questions[0].answers[1].text,
            answer2Id: questions.questions[0].answers[1]._id
          }
        }))
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  onAnswerInput = answerId => {
    console.log(this.state.actualItem.questionId);
    const data = {
      _id: this.state.actualItem.questionId,
      answer: answerId
    };

    const i = this.state.i + 1;

    if (i < this.state.questions.length - 1) {
      this.setState(function(prevState) {
        prevState.answers.push(data);
        prevState.i = i;

        return prevState;
      });
    } else if (i === this.state.questions.length - 1) {
      this.setState(function(prevState) {
        prevState.answers.push(data);
        prevState.i = i;

        return prevState;
      });

      setTimeout(() => {
        this.setState(function(prevState) {
          prevState.submitResults = true;

          return prevState;
        });
      }, 800);
    }

    if (i < this.state.questions.length - 1) {
      this.state.actualItem = {
        question: this.state.questions[i + 1].text,
        questionId: this.state.questions[i + 1]._id,
        answer1: this.state.questions[i + 1].answers[0].text,
        answer1Id: this.state.questions[i + 1].answers[0]._id,
        answer2: this.state.questions[i + 1].answers[1].text,
        answer2Id: this.state.questions[i + 1].answers[1]._id
      };
    }
  };

  handleEndQuiz = () => {
    const userId = logic.getUser()._id;
    const quizId = this.state.quizId;
    const questions = this.state.answers;

    logic
      .addSolvedQuizToUser(userId, quizId, questions)
      .then(
        this.setState(function(prevState) {
          prevState.quizFinished = true;

          return prevState;
        }))
      .catch(console.error);
  };

  render() {
    if (!this.state.submitResults) {
      // console.log("show question", this.state.i)
      return (
        <div className="container">
          <div className="question-block">
            <p className="lead">{this.state.actualItem.question}</p>
            <hr />
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <button
                  className="btn btn-primary btn-lg btn-block"
                  onClick={() =>
                    this.onAnswerInput(this.state.actualItem.answer1Id)
                  }
                >
                  {this.state.actualItem.answer1}
                </button>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  onClick={() =>
                    this.onAnswerInput(this.state.actualItem.answer2Id)
                  }
                >
                  {this.state.actualItem.answer2}
                </button>
              </div>
            </div>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role={"progressbar"}
              aria-valuenow={(
                (this.state.i + 1) /
                this.state.questions.length *
                100
              ).toString()}
              aria-valuemin={"0"}
              aria-valuemax={"100"}
              style={{
                width:
                  (
                    (this.state.i + 1) /
                    this.state.questions.length *
                    100
                  ).toString() + "%"
              }}
            >
              {/* {(this.state.i + 1) / this.state.questions.length * 100} */}
            </div>
          </div>
        </div>
      );
    } else if (!this.state.quizFinished) {
      return (
        <div className="container results">
          <div className="question-block">
            <div className="row">
              <button
                className="btn btn-primary btn-lg text-center center-block"
                onClick={this.handleEndQuiz}
              >
                <h2>Submit the quiz.</h2>
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container results">
          <div className="question-block">
            <div className="row">
              <h1 className="text-center"> Thanks for your participation!</h1>
              <br />
              <br />

              <button
                className="btn btn-primary btn-lg text-center center-block"
              >
                <h2>Go to your profile page!</h2>
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Quiz;
