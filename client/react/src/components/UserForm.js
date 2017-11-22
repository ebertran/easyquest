import React, { Component } from "react";
import axios from "axios";

import InputForm from "./InputForm";
import InputFormRadio from "./InputFormRadio";
import InputFormArea from "./InputFormArea";

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
              <InputForm
                type="text"
                id="username"
                placeholder="Enter username"
                changeState={this.changeState}
              />
              <InputForm
                type="email"
                id="email"
                placeholder="Enter email"
                changeState={this.changeState}
              />
              <InputForm
                type="password"
                id="password"
                placeholder="Enter password"
                changeState={this.changeState}
              />
              <InputForm
                type="text"
                id="name"
                placeholder="Enter name"
                changeState={this.changeState}
              />
              <InputForm
                type="text"
                id="surename"
                placeholder="Enter surename"
                changeState={this.changeState}
              />
              <InputForm
                type="date"
                id="birthdate"
                placeholder="Enter birthdate"
                changeState={this.changeState}
              />
              <InputFormRadio
                  type="radio"
                  id="sex"
                  options={["female", "male", "trans","other"]}
                  changeState={this.changeState}
                />
              <InputForm
                type="text"
                id="zipcode"
                placeholder="Enter zipcode"
                changeState={this.changeState}
              />
              <InputFormRadio
                  type="radio"
                  id="education"
                  options={["none", "primary", "secundary","superior"]}
                  changeState={this.changeState}
                />
              <InputFormRadio
                  type="radio"
                  id="occupation"
                  options={["studying", "working","unemployed","retired"]}
                  changeState={this.changeState}
                />
              <InputForm
                type="text"
                id="organization"
                placeholder="Enter organization"
                changeState={this.changeState}
              />

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

export default UserForm;
