import React, { Component } from "react";
import axios from "axios";
import Logic from '../logic/Logic'

const logic = new Logic()

class Home extends Component {
  constructor() {
    super();

    this.state = {
      username: 'Warki',
      password: '123'
    };
  }

  setUsername = (event) => {
    const username = event.target.value

    this.setState({ username })
  }

  setPassword = (event) => {
    const password = event.target.value

    this.setState({ password })
  }

  login = (event) => {
    event.preventDefault()

    logic.login(this.state.username, this.state.password)
      .then(console.log)
      .catch(console.error)
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-offset-1 col-sm-7">
          <img className="logo img-responsive center-block" src="../images/_logo-white.svg" alt="#" />
          <div className="text-center">
            <h2>Where your quizs will rule the Earth</h2>
          </div>
        </div>
        <div className="col-sm-3">
          <form className="form-horizontal">
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="username">
                Username:
                      </label>
              <div className="col-sm-8">
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
              <label className="control-label col-sm-2" htmlFor="pwd">
                Password:
                      </label>
              <div className="col-sm-8">
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
              <div className="col-sm-offset-2 col-sm-8">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Remember me
                          </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary" onClick={this.login}>
                  Login!
                        </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

export default Home;
