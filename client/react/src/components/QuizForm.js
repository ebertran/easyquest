import React, { Component } from "react";
import axios from "axios";

import UserProfile from "./UserProfile";
import Question from './Question';
import InputForm from './InputForm';

class QuizForm extends Component {
  constructor() {
    super();

    this.state = {
      newQuizs: [],
      questions: [],
      quizData: {}
    }
  }

  handleClick = () => {
    this.setState(function (prevState) {
      return {
          newQuizs: prevState.newQuizs.concat(<Question />)
      }
    })
  }

  changeState = (key, value) => {
    const newData = { [key]: value }
    this.setState(prevState => {
      return { quizData: { ...prevState.quizData, ...newData } }
    })
  }
  
  render() {
    return (<div>
      <UserProfile />
      <div className="col-sm-10">
        <section className="panel panel-reverse">
          <div>
            <nav className="panel-heading navbar navbar-default navbar-center">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#">
                    <h4>Create you quiz!</h4>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="panel-body">
            <form className="form-horizontal">
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="title">
                  Title:
                </label>
                <div className="col-sm-9">
                  <InputForm
                    type='text'
                    id="title"
                    placeholder="Enter title"
                    changeState={this.changeState}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="author">
                  Author
                </label>
                <div className="col-sm-9">
                  <InputForm
                      type="text"
                      id="Author"
                      placeholder="Enter author"
                      changeState={this.changeState}
                    />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="field">
                  Field
                </label>
                <div className="col-sm-9">
                  <InputForm
                      type="text"
                      id="Field"
                      placeholder="Enter field"
                      changeState={this.changeState}
                    />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="tags">
                  Tags
                </label>
                <div className="col-sm-9">
                <InputForm
                      type="text"
                      id="tags"
                      placeholder="Enter tags (Use ';' to separte different tags)"
                      changeState={this.changeState}
                    />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="description">
                  Description
                </label>
                <div className="col-sm-9">
                  <textarea
                    type="text"
                    className="form-control"
                    rows={4}
                    id="description"
                    placeholder="Enter description"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="version">
                  Version
                </label>
                <div className="col-sm-9">
                   <InputForm
                      type="text"
                      id="version"
                      placeholder="Enter version"
                      changeState={this.changeState}
                    />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="scope">
                  Scope
                </label>
                <div className="col-sm-9">
                  <label className="radio-inline">
                    <input type="radio" name="scope" />Public
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="scope" />Private
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="allowed">
                  Users allowed
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="allowed"
                    placeholder="Enter users allowed"
                  /> <InputForm
                      type="text"
                      id="Field"
                      placeholder="Enter title"
                      changeState={this.changeState}
                    />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="active">
                  Active
                </label>
                <div className="col-sm-9">
                  <label className="radio-inline">
                    <input type="radio" name="active" />On
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="active" />Off
                  </label>
                </div>
              </div>
              <hr />
              <h4 className="text-center">Items</h4>
              <br />
              <Question />
              {
                this.state.newQuizs
              }
              <div className="form-group">
                <div className="col-sm-12 center-block">
                  <button
                    type="submit"
                    className="buttonFull center-block btn btn-primary"
                    onClick={this.handleClick}
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
      </div>
    );
  }
}

export default QuizForm;
