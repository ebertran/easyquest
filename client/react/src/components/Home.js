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
        <div className="col-sm-9">
          <img
            className="logo img-responsive center-block"
            src="../images/logo-white.svg"
            alt="#"
          />
          <div className="text-center">
            {/* <h2>Where your quizs will rule the Earth</h2> */}
          </div>
        </div>
        <div className="col-sm-3">
          <form className="form-horizontal login">
            <div className="form-group">
              <label
                className="control-label text-left col-sm-1"
                htmlFor="username"
              >
                Username:
              </label>
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter username"
                  onChange={this.setUsername}
                  value={this.state.username}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-1" htmlFor="pwd">
                Password:
              </label>
              <div className="col-sm-12">
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  onChange={this.setPassword}
                  value={this.state.password}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-8">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-4 col-sm-10">
                <button
                  type="submit"
                  className="btn btn-default"
                  onClick={this.login}
                >
                  Login!
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm-3">
          <h2>Three Steps Program:</h2>
          <h3>1. Make your quizs</h3>
          <h3>2. Share your quizs</h3>
          <h3>3. Rule the Earth</h3>
        </div>

        <div className="col-sm-3">
        <Link to="/user-form">
        <form className="form-horizontal register">
        <h2 className="text-center register-text">Register now!</h2>
          </form>
          </Link>
        </div>
        
      </div>
    );
  }
}

export default withRouter(Home);
