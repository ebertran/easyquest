import React, { Component } from "react";
import axios from "axios";

import UserFields from "./fields/UserFields";
import InputForm from "./inputForm/InputFormText";
import InputFormRadio from "./inputForm/InputFormRadio";
import InputFormArea from "./inputForm/InputFormArea";

class UserForm extends Component {
  constructor() {
    super();

    this.state = {
      userData: {}
    };
  }

  changeState = (key, value) => {
    const newData = { [key]: value };
    this.setState(prevState => {
      return { userData: { ...prevState.userData, ...newData } };
    });
  };

  handleClickSubmit = e => {
    e.preventDefault();
    this.setState(function(prevState) {
      return {
        // TODO Post the state to create quiz
      };
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
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
                  <UserFields changeState={this.changeState} />
                  <div className="form-group">
                    <div className="col-sm-12 center-block">
                      <button
                        className="buttonFull center-block btn btn-primary"
                        onClick={this.handleClickSubmit}
                      >
                        Register!
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;
