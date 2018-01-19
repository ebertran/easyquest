import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

import UserFields from "./fields/UserFields"
import InputForm from "./inputForm/InputFormText"
import InputFormRadio from "./inputForm/InputFormRadio"
import InputFormArea from "./inputForm/InputFormArea"
import { arch } from "os"

import Logic from "../../logic/Logic"

const {
  withRouter
} = require('react-router-dom')

const logic = new Logic()


class UserForm extends Component {
  constructor() {
    super()

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
        education: "",
        occupation: "",
        organization: ""
      },
      userFormFinished: false
    }
  }

  changeState = (index, key, value) => {
    const newData = { [key]: value }

    this.setState(prevState => {
      return { userData: { ...prevState.userData, ...newData } }
    })
  }

  handleClickSubmit = e => {
    e.preventDefault()

    logic
      .createUser(
      this.state.userData.username,
      this.state.userData.email,
      this.state.userData.password,
      this.state.userData.avatar,
      this.state.userData.color,
      this.state.userData.rex,
      this.state.userData.name,
      this.state.userData.surname,
      this.state.userData.birthdate,
      this.state.userData.sex,
      this.state.userData.zipcode,
      this.state.userData.education,
      this.state.userData.occupation,
      this.state.userData.organization
      )
      .then(() => {
        this.setState(function (prevState) {
          prevState.userFormFinished = true

          return prevState
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  goToProfile = () => {
    this.props.history.push('/quiz-list')
  }

  render() {
    if (!this.state.userFormFinished) {
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
                  <form className="form-horizontal" onSubmit={this.handleClickSubmit}>
                    <UserFields changeState={this.changeState} />
                    <div className="form-group">
                      <div className="col-sm-12 center-block">
                        <button
                          className="buttonFull center-block btn btn-primary"
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
      )
    } else {
      return (
        <div className="container results">
          <div className="question-block">
            <div className="row">
              <h1 className="text-center"> Welcome to this awsome comunity and become a Quezaurus Rex!</h1>
              <br />
              <br />

              <button
                className="btn btn-primary btn-lg text-center center-block"
                onClick={this.goToProfile}
              >
                <h2>Go to your profile page!</h2>
              </button>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(UserForm)
