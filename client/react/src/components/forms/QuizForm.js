import React, { Component } from "react";
import axios from "axios";
import uuidv4 from "uuid/v4";

import UserProfile from "../UserProfile";
import QuizPersonalData from "./fields/QuizPersonalData";
import QuizQuestion from "./fields/QuizQuestion";
import InputFormText from "./inputForm/InputFormText";
import InputFormRadio from "./inputForm/InputFormRadio";
import InputFormArea from "./inputForm/InputFormArea";

import Logic from "../../logic/Logic";
const logic = new Logic();

class QuizForm extends Component {
  constructor() {
    super();

    this.state = {
      newQuizs: [
        <QuizQuestion index={0} key={uuidv4()} changeState={this.addQuestion} />
      ],
      questions: [],
      quizPersonal: {},
      quizFormFinished: false
    };
  }

  handleClickAddQuestion = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        newQuizs: prevState.newQuizs.concat(
          <QuizQuestion
            index={prevState.newQuizs.length}
            key={uuidv4()}
            changeState={this.addQuestion}
          />
        ),
        questions:
          prevState.questions.length > 0
            ? [...prevState.questions, this.state.quizData]
            : [this.state.quizData],
        quizData: {}
      };
    });
  };

  addQuestion = (index, id, value) => {
    console.log(index, id, value);

    this.setState(prevState => {
      const questions = prevState.questions.slice(0);

      const question = questions[index] || {};

      question[id] = value;

      questions[index] = question;

      return { questions };
    });
  };

  handleClickSubmit = e => {
    e.preventDefault();

    const _questions = this.state.questions.map(question => {
      const _question = {};

      _question.text = question.question;

      _question.answers = [];

      const _answer1 = {};
      _answer1.text = question.answer1;
      _answer1.dimension = question.dimension1;
      _answer1.value = question.value1;

      const _answer2 = {};
      _answer2.text = question.answer2;
      _answer2.dimension = question.dimension2;
      _answer2.value = question.value2;

      _question.answers.push(_answer1);
      _question.answers.push(_answer2);

      return _question;
    });

    logic
      .createQuiz({
        title: this.state.quizPersonal.title,
        author: this.state.quizPersonal.author,
        field: this.state.quizPersonal.field,
        tags: this.state.quizPersonal.tags,
        description: this.state.quizPersonal.description,
        version: this.state.quizPersonal.version,
        questions: _questions
      })
      .then(
        this.setState(function(prevState) {
          prevState.quizFormFinished = true;

          return prevState;
        })
      )
      .catch(console.error);
  };

  setPersonalInfo = (index, key, value) => {
    const newData = { [key]: value };
    this.setState(prevState => {
      return { quizPersonal: { ...prevState.quizPersonal, ...newData } };
    });
  };

  render() {
    if (!this.state.quizFormFinished) {
      return (
        <div>
          <div className="container">
            <div className="row">
              <UserProfile />
              <div className="col-sm-10">
                <section className="panel panel-reverse">
                  <div>
                    <nav className="panel-heading navbar navbar-default navbar-center">
                      <ul className="nav navbar-nav">
                        <li>
                          <a href="#">
                            <h4>Create you quiz!</h4>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="panel-body">
                    <form
                      className="form-horizontal"
                      onSubmit={this.handleClickSubmit}
                    >
                      <QuizPersonalData changeState={this.setPersonalInfo} />
                      <hr />
                      <h4 className="text-center">Items</h4>
                      <br />
                      {this.state.newQuizs}
                      <div className="form-group">
                        <div className="col-sm-12">
                          <button
                            className="buttonFull pull-left btn btn-success"
                            onClick={this.handleClickAddQuestion}
                          >
                            Add question
                          </button>
                          <button className="buttonFull pull-right btn btn-primary">
                            Create quiz
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container results">
          <div className="question-block">
            <div className="row">
              <h1 className="text-center">
                {" "}
                Your quiz is complete, congratulations!
              </h1>
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

export default QuizForm;
