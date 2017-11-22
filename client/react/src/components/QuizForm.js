import React, { Component } from "react";
import axios from "axios";

import UserProfile from "./UserProfile";
import Question from "./Question";
import InputForm from "./InputForm";
import InputFormRadio from "./InputFormRadio";
import InputFormArea from "./InputFormArea";

class QuizForm extends Component {
  constructor() {
    super();

    this.state = {
      newQuizs: [],
      questions: [],
      quizData: {}
    };
  }

  handleClick = () => {
    this.setState(function(prevState) {
      return {
        newQuizs: prevState.newQuizs.concat(<Question />)
      };
    });
  };

  changeState = (key, value) => {
    const newData = { [key]: value };
    this.setState(prevState => {
      return { quizData: { ...prevState.quizData, ...newData } };
    });
  };

  render() {
    return (
      <div>
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
                <InputForm
                  type="text"
                  id="title"
                  placeholder="Enter title"
                  changeState={this.changeState}
                />

                <InputForm
                  type="text"
                  id="Author"
                  placeholder="Enter author"
                  changeState={this.changeState}
                />
                <InputForm
                  type="text"
                  id="Field"
                  placeholder="Enter field"
                  changeState={this.changeState}
                />
                <InputForm
                  type="text"
                  id="tags"
                  placeholder="Enter tags (Use ';' to separte different tags)"
                  changeState={this.changeState}
                />
                <InputFormArea
                  type="text"
                  id="description"
                  placeholder="Enter version"
                  changeState={this.changeState}
                />
                <InputForm
                  type="text"
                  id="version"
                  placeholder="Enter version"
                  changeState={this.changeState}
                />
                <InputFormRadio
                  type="radio"
                  id="scope"
                  options={["public", "private"]}
                  changeState={this.changeState}
                />
                <InputForm
                  type="text"
                  id="allowed"
                  placeholder="Enter users allowed"
                  changeState={this.changeState}
                />
                <InputFormRadio
                  type="radio"
                  id="active"
                  options={["on", "off"]}
                  changeState={this.changeState}
                />

                <hr />

                <h4 className="text-center">Items</h4>
                <br />
                <Question />
                {this.state.newQuizs}
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
