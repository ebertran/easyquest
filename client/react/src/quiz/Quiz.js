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
      answer1: questions[0].answers[0].text,
      answer2: questions[0].answers[1].text
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
                <Button
                  classname="btn btn-primary btn-lg"
                  block
                  onClick={this.onAnswerInput}
                  data={this.actualItem.answer1value}
                >
                  {this.actualItem.answer1}
                </Button>
                <Button
                  classname="btn btn-primary btn-lg"
                  block
                  onClick={this.onAnswerInput}
                  data={this.actualItem.answer2value}
                >
                  {this.actualItem.answer2}
                </Button>
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
            //PUT an object to the array quizs --> {id:id,answers:[]}

              {/* <LinkContainer to="/results">
								<Button text-center bsStyle="primary" block bsSize="large" data-value={this.state.testResult}><h2>Show me the results!</h2></Button>
						</LinkContainer> */}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Quiz;
