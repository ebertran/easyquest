import React, { Component } from "react";
import axios from "axios";

import UserFields from "./fields/UserFields";
import InputForm from "./inputForm/InputFormText";
import InputFormRadio from "./inputForm/InputFormRadio";
import InputFormArea from "./inputForm/InputFormArea";
import { arch } from "os";

import Logic from "../../logic/Logic";
const logic = new Logic();


class UserForm extends Component {
  constructor() {
    super();

    this.state = {
      userData: {
        username: "",
        email: "",
        password: "",
        avatar: "",
        color: "",
        rex: "",
        name: "",
        surname: "",
        birthdate: "",
        sex: "",
        zipcode: "",
        studies: "",
        occupation: "",
        organization: ""
      }
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
    logic
      .createUser({
        username: this.state.userData.username,
        email: this.state.userData.email,
        password: this.state.userData.password,
        avatar: this.state.userData.avatar,
        color: this.state.userData.color,
        rex: this.state.userData.rex,
        name: this.state.userData.name,
        surname: this.state.userData.surname,
        birthdate: this.state.userData.birthdate,
        sex: this.state.userData.sex,
        zipcode: this.state.userData.zipcode,
        studies: this.state.userData.studies,
        occupation: this.state.userData.occupation,
        organization: this.state.userData.organization
      })
      .then(console.log)
      .catch(console.error);
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
