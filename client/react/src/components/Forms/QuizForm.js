import React, { Component } from "react";
import axios from "axios";
import uuidv4 from 'uuid/v4'

import UserProfile from "../UserProfile";
import QuizPersonalData from "./Fields/QuizPersonalData";
import QuizQuestion from "./Fields/QuizQuestion";
import InputFormText from "./InputForm/InputFormText";
import InputFormRadio from "./InputForm/InputFormRadio";
import InputFormArea from "./InputForm/InputFormArea";

import Logic from "../../logic/Logic";
const logic = new Logic()

class QuizForm extends Component {
  constructor() {
    super();

    this.state = {
      newQuizs: [<QuizQuestion index={0} key={uuidv4()} changeState={this.addQuestion} />],
      questions: [],
      quizPersonal: {}
    };
  }

  handleClickAddQuestion = (e) => {
    e.preventDefault()
    this.setState(prevState => {
      return {
        newQuizs: prevState.newQuizs.concat(<QuizQuestion index={prevState.newQuizs.length} key={uuidv4()} changeState={this.addQuestion} />),
        questions: prevState.questions.length > 0 ? [...prevState.questions, this.state.quizData] : [this.state.quizData] ,
        quizData: {}
      };
    });
  };

  addQuestion = (index, id, value) => {
    console.log(index, id, value)
    
    this.setState(prevState => {
      const questions = prevState.questions.slice(0)

      const question = questions[index] || {}

      question[id] = value

      questions[index] = question

      return { questions }
    });
  };

  
  handleClickSubmit = (e) => {
    e.preventDefault()
    return 
      logic.createQuiz('https://desolate-bastion-53155.herokuapp.com/api/quizs', { 
        quizPersonal: this.state.quizPersonal, 
        questions: this.state.questions
      })
      .then(console.log)
      .catch(console.error)
  };

  setPersonalInfo = (index, key, value) => {
    const newData = { [key]: value };
    this.setState(prevState => {
      return { quizPersonal: { ...prevState.quizPersonal, ...newData } };
    });
  };

  

  render() {
    return (
      <div>
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
              <form className="form-horizontal">
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
                    <button
                      className="buttonFull pull-right btn btn-primary"
                      onClick={this.handleClickSubmit}
                    >
                      Create quiz
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default QuizForm;
