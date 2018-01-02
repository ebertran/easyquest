import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import UserProfile from "./UserProfile";

import Logic from "../logic/Logic";
const logic = new Logic();

class QuizList extends Component {
  constructor() {
    super();

    this.state = {
      quizs: [],
      logged: false
    };
  }

  componentDidMount() {
    logic
      .listQuizsByUser()
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
            <UserProfile />
            <div className="col-sm-10">
              <section className="panel panel-reverse">
                <div>
                  <nav className="panel-heading navbar navbar-default navbar-center">
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="#">
                          
                          <div key={index} className="col-sm-3 user-tests-box">
                            <h3>{quiz.title}</h3>
                            <p>{quiz.description}</p>
                            <br />
                            <br />
                            <NavLink to={`/results/${quiz._id}`}>
                              <button
                                type="button"
                                className="btn btn-space btn-primary"
                              >
                                Results
                              </button>
                            </NavLink>

                            <button
                              type="button"
                              className="btn btn-space btn-success"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-space btn-danger"
                            >
                              Delete
                            </button>
                          </div>
                          
                        );
                      })}
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
  }
}

export default QuizList;
