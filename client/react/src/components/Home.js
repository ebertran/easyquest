import React, { Component } from "react";
import axios from "axios";
import Logic from "../logic/Logic";
import { Link } from "react-router-dom";

const { withRouter } = require("react-router-dom");

const logic = new Logic();

class Home extends Component {
  constructor() {
    super();

    this.state = {
      username: "Warki",
      password: "123"
    };
  }

  setUsername = event => {
    const username = event.target.value;

    this.setState({ username });
  };

  setPassword = event => {
    const password = event.target.value;

    this.setState({ password });
  };

  login = event => {
    event.preventDefault();

    logic
      .login(this.state.username, this.state.password)
      .then(data => {
        if (data) {
          this.props.history.push("/quiz-list/");
        }
      })
      .catch(console.error);
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-offset-2 col-sm-8">
          <img
            className="logo img-responsive center-block"
            src="../images/logo-white.svg"
            alt="#"
          />
          <div className="text-center">
            {/* <h2>Where your quizs will rule the Earth</h2> */}
          </div>
        </div>        
      </div>
    );
  }
}

export default withRouter(Home);
