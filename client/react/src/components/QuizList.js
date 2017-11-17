import React, { Component } from "react";
import axios from 'axios'

class QuizList extends Component {
  constructor() {
    super();

    this.state = {
      user: "",
      quizs: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/quizs')
            .then(({data:{data:quizs}}) => {
                quizs = quizs.filter(quiz => quiz.user === "5a04c5ae1d195c4e88dbfcaa")

                this.setState({quizs})
            })
            .catch(function (err) {
                console.error(err)
            })
  }

  render() {
    return (
      <div className="col-sm-10">
        <section className="text-center panel panel-default">
          <div className="text-left panel-heading">
            <div>
              <h2>
                Your tests
                <a href="#">
                  <button type="button" className="btn btn-primary pull-right">
                    Create a new test!
                  </button>
                </a>
              </h2>
            </div>
          </div>
          <div className="panel-body">
            <div className="row">
              {'{'}this.state.quizs.map(function(quiz, index) {'{'}
              return (
              <div className="col-sm-4 user-tests-box">
                <h4 key="{index}">{'{'}quiz.title{'}'}</h4>
                <p key="{index}">{'{'}quiz.description{'}'}</p>
                <br />
                <button type="button" className=" btn-space btn-primary">
                  Results
                </button>
                <button type="button" className=" btn-space btn-success">
                  Edit
                </button>
                <button type="button" className=" btn-space btn-danger">
                  Delete
                </button>
              </div>
              );
              {'}'}){'}'}
            </div>
          </div></section>
      </div>
    )
    
  }
}

export default QuizList;
