import React, { Component } from "react";

import Logic from "../logic/Logic";
const logic = new Logic();

class ResultsList extends Component {
  constructor() {
    super();
    this.state = {
      quizId: "",
      users: []
    };
  }

  componentDidMount() {
    logic
      .listQuizs(this)
      .then(quizsTitle => {
        this.setState({ quizsTitle });
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
              <section className="panel panel-reverse">
                <div>
                  <nav className="panel-heading navbar navbar-default navbar-center">
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="#">
                          <h1>The Newest Quizs</h1>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="panel-body">
                  <div className="container">
                    <div className="row">
                    <ul>
                      {this.state.users.map((users, index) => {
                        const user = logic.retrieveUser(quizsTitle.user);

                        return (
                          <div
                            key={index}
                            className="col-sm-12 user-tests-box row"
                          >
                          <li className="user-results">user.username</li>
                          <li className="user-results">user.birthdate</li>
                          <li className="user-results">user.sex</li>
                          <li className="user-results">user.zipcode</li>
                          <li className="user-results">user.eduaction</li>
                          <li className="user-results">user.occupation</li>
                          {answers.map((answer, index) => {
                        return (
                          
                          <li className="user-results">answer.username</li>

                        )}
                        )}
                          </div> 
                        )
                      })}
                      </ul>
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

export default ResultsList;
