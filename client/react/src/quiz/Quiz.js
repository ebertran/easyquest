import React, { Component } from "react";

import Logic from "../logic/Logic";
const logic = new Logic();

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      id: "5a04c5ae1d195c4e88dbfca1",
      questions: [],
      currentPosition: 0,
      results: [],
      i: -1,
      showResults: false
    }

    this.actualItem = {
      question: questions[0].text,
      questionId: questions[0]._id,
      answer1: questions[0].answers[0].text,
      answer1Id: questions[0].answers[0]._id,
      answer2: questions[0].answers[1].text,
      answer2Id: questions[0].answers[1]._id
    }
  }

  componentDidMount() {
    logic
      .retrieveQuiz(this.state.id)
      .then(questions => {
        this.setState({ questions: quizs.questions });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  onAnswerInput = event => {
    //console.log(this.state)

    const i = this.state.i + 1;
    const data = event.target.getAttribute("data")//get index of answer;

    if (i < Items.length - 1) {
      this.setState(function(prevState) {
        prevState.results.push(data);
        prevState.i = i;

        return prevState;
      });
    } else if (i === Items.length - 1) {
      this.setState(function(prevState) {
        prevState.results.push(data);
        prevState.i = i;

        return prevState;
      });

      setTimeout(() => {
        this.setState(function(prevState) {
          prevState.showResults = true;

          return prevState;
        });
      }, 800);
    }

    if (i < Items.length - 1) {
      this.actualItem = {
        question: questions[i + 1].text,
        answer1: questions[i + 1].answers[0].text,
        answer2: questions[i + 1].answers[1].text
    }
  }

  handleEndQuiz = e => {

    logic
      .addQuiz({
        title: this.state.quizPersonal.title,
        author: this.state.quizPersonal.author,
        field: this.state.quizPersonal.field,
        tags: this.state.quizPersonal.tags,
        description: this.state.quizPersonal.description,
        version: this.state.quizPersonal.version,
        questions: _questions
      }
      )
      .then(console.log)
      .catch(console.error);
  };

  render() 

    if (!this.state.showResults) {
      // console.log("show question", this.state.i)
      return (
        <div className="container">
          <div className="question-block">
            <p className="lead">{this.actualItem.question}</p>
            <hr />
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <button
                  classname="btn btn-primary btn-lg"
                  block
                  onClick={this.onAnswerInput}
                  data={ 
                      "_id": {this.actualItem.questionId},
                      "answer": {this.actualItem.answer1Id}
                  }
                >
                  {this.actualItem.answer1}
                </button>
                <button
                  classname="btn btn-primary btn-lg"
                  block
                  onClick={this.onAnswerInput}
                  data={ 
                    "_id": {this.actualItem.questionId},
                    "answer": {this.actualItem.answer2Id}
                }
                >
                  {this.actualItem.answer2}
                </button>
              </div>
            </div>
          </div>
          <div class="progress">
            <div
              class="center progress-bar-striped active"
              role="progressbar"
              aria-valuenow={(this.state.i + 1) / Items.length * 100}
              aria-valuemin="0"
              aria-valuemax="100"
              style="width:70%"
            >
              {(this.state.i + 1) / Items.length * 100}
            </div>
          </div>
        </div>
      )
    } else {
      console.log(this.state.testResult);
      return (
        <div className="container results">
          <div className="question-block">
            <div className="row">
          
        
      <NavLink to="/quiz" activeClassName="active">
								<Button classname="btn btn-primary btn-lg"
                  block
                  onClick={this.handleEndQuiz}
                  className="btn btn-primary btn-lg text-center"><h2>Submit the text. Thanks for your participation!</h2></Button>
                </NavLink>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Quiz;
