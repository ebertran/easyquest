import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Logic from "../logic/Logic";
const logic = new Logic();

class NewQuizs extends Component {
  constructor() {
    super();

    this.state = {
      quizsTitle: []
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
    return ( <div className="container">
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
                  {this.state.quizsTitle.map((quizsTitle, index) => {
                    const user = logic.retrieveUser(quizsTitle.user)

                    return (                      
                      <div key={index} className="col-sm-3 user-tests-box row">
                        <h4>{quizsTitle.title}</h4>
                        <h5>
                          Quizer: <a>{user.username}</a>
                        </h5>
                        <p>{quizsTitle.description}</p>
                        <br />
                        <br />
                        <NavLink to={`/quiz/${quizsTitle._id}`}>
                          <button
                            type="button"
                            className="btn btn-space btn-primary"
                          >
                            Do it!
                          </button>
                        </NavLink>
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

export default NewQuizs;
