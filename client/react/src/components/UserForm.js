import React, { Component } from "react";
import axios from "axios";

class QuizForm extends Component {
  constructor() {
    super();

    this.state = {
      // TODO???
    };
  }

  render() {
    return (
      <div className="col-sm-12">
        <section className="panel panel-reverse">
          <div>
            <nav className="panel-heading navbar navbar-default navbar-center">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#">
                    <h4>Create profile!</h4>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="panel-body">
            <form className="form-horizontal">
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="username">
                  Username:
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="email">
                  Email:
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="password">
                  Password:
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="name">
                  Name:
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name (Use semicolon to separte different tags)"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="surename">
                  Surename:
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="surename"
                    placeholder="Enter surename"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="birthdate">
                  Birthdate:
                </label>
                <div className="col-sm-9">
                  <input type="date" className="form-control" id="birthdate" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="sex">
                  Sex:
                </label>
                <div className="col-sm-9">
                  <label className="radio-inline">
                    <input type="radio" name="sex" />Female
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="sex" />Male
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="sex" />Trans
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="sex" />Other
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="zipcode">
                  Zipcode:
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="zipcode"
                    placeholder="Enter zipcode"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="studies">
                  Studies:
                </label>
                <div className="col-sm-9">
                  <label className="radio-inline">
                    <input type="radio" name="studies" />None
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="studies" />Primary
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="studies" />Secondary
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="studies" />Superior
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="studies">
                  Occupation:
                </label>
                <div className="col-sm-9">
                  <label className="radio-inline">
                    <input type="radio" name="studies" />Studying
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="studies" />Working
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="studies" />Unemployed
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="studies" />Retired
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label
                  className="control-label col-sm-2"
                  htmlFor="organization"
                >
                  Organization name:
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="organization"
                    placeholder="Enter organization name"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12 center-block">
                  <button
                    type="submit"
                    className="buttonFull center-block btn btn-primary"
                  >
                    Submit!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default QuizForm;
