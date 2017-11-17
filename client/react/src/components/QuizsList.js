import React, { Component } from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: "",
      quizs: []
    };
  }

  componentDidMount() {
    axios
      .get("https://facebook.github.io/react-native/quizs.json")
      .then(({ data: { quizs } }) => {
        console.log(quizs);
        this.setState({ quizs });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  render() {
    return;
    <div class="col-sm-10">
      <section class="text-center panel panel-default">
        <div class="text-left panel-heading">
          <div>
            <h2>
              Your tests
              <a href="#">
                <button type="button" class="btn btn-primary pull-right">
                  Create a new test!
                </button>
              </a>
            </h2>
          </div>
        </div>
        <div class="panel-body" />
        <div class="row">
          {this.state.quizs.map(function(quiz, index) {
            return (
              <div class="col-sm-4 user-tests-box">
                <h4 key={index}>{quiz.title}</h4>
                <p key={index}>{quiz.description}</p>
                <br />
                <button type="button" class=" btn-space btn-primary">
                  Results
                </button>
                <button type="button" class=" btn-space btn-success">
                  Edit
                </button>
                <button type="button" class=" btn-space btn-danger">
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>;
  }
}

export default QuizList;
