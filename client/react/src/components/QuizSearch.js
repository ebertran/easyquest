import React, { Component } from "react";

import Logic from "../logic/Logic";
const logic = new Logic();

class QuizSearch extends Component {
  constructor() {
    super();

    this.state = {
      query: "",
      quizsTitle: [],
      quizsAuthor: []
    };
  }

  componentDidMount() {
    logic
      .listQuizsByTitle(this.state.query)
      .then(quizsTitle => {
        this.setState({ quizsTitle });
      })
      .catch(function(err) {
        console.error(err);
      });

    logic
      .listQuizsByAuthor(this.state.query)
      .then(quizsAuthor => {
        this.setState({ quizsAuthor });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <section className="panel panel-default">
              <div className="text-center panel-heading  custom-logo">
                <div className="">
                  <h2>Search results by titles</h2>
                </div>
              </div>
              <div className="panel-body">
                <div className="row">
                  {this.state.quizsTitle.map((quizsTitle, index) => {
                    return (
                      <div key={index} className="col-sm-6 user-tests-box">
                        <h4>{quizsTitle.title}</h4>
                        <h5>
                          Quizer: <a>{quizsTitle.user}</a>
                        </h5>
                        <p>{quizsTitle.description}</p>
                        <br />
                        <button
                          type="button"
                          className="btn btn-space btn-primary"
                          onClick={this.onAnswerInput}
                          data={this.state.quizsTitle._id}
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
          <div className="col-sm-6">
            <section className="panel panel-default">
              <div className="text-center panel-heading  custom-logo">
                <div className="">
                  <h2>Search results by quizers</h2>
                </div>
              </div>
              <div className="panel-body">
                <div className="row">
                  {this.state.quizsAuthor.map((quizsAuthor, index) => {
                    return (
                      <div key={index} className="col-sm-6 user-tests-box">
                        <h4>{quizsAuthor.title}</h4>
                        <h5>
                          Quizer: <a>{quizsAuthor.user}</a>
                        </h5>
                        <p>{quizsAuthor.description}</p>
                        <br />
                        <button
                          type="button"
                          className="btn btn-space btn-primary"
                          onClick={this.onAnswerInput}
                          data={this.state.quizsAuthor._id}
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
    );
  }
}

export default QuizSearch;
