import React, { Component } from "react";

import Logic from "../logic/Logic";
const logic = new Logic();

class QuizSearch extends Component {
  constructor() {
    super();

    this.state = {
      query: "",
      quizs: []
    };
  }

  componentDidMount() {
    logic
      .listQuizsBySearch()
      .then(quizs => {
        this.setState({ quizs });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div>
            <div className="col-sm-12">
              <section className="panel panel-default">
                <div className="text-center panel-heading  custom-logo">
                  <div className="">
                    <h2>
                      Search results
                    </h2>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="row">
                    {this.state.quizs.map((quiz, index) => {
                      return (
                        <div key={index} className="col-sm-4 user-tests-box">
                          <h4>{quiz.title}</h4>
                          <h5>Quizer: <a>username</a></h5>
                          <p>{quiz.description}</p>
                          <br />
                          <button
                            type="button"
                            className="btn btn-space btn-primary"
                          >
                            Do it!
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizSearch;
