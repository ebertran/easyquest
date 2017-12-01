import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Logic from "../logic/Logic";
const logic = new Logic();

class QuizSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: props.match.params.query,
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
                    <h1>Search results:</h1>
                    </a>
                  </li>
                </ul>
             
              </nav>
            </div>
              <div className="panel-body">
              <div className="container">
                <div className="row">
                  {this.state.quizsTitle.map((quizsTitle, index) => {
                    return (
                      <div key={index} className="col-sm-3 user-tests-box">
                        <h4>{quizsTitle.title}</h4>
                        <h5>
                          Author: <a>{quizsTitle.author}</a>
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

export default QuizSearch;
