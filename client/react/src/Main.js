import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import questions from "../dataService/questions.json";

import UserProfile from "./components/UserProfile";
import QuizList from "./components/QuizList";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      quizs: []
    };
  }

  render() {
    return (
      <content>
        <div class="container">
          <div class="row">
            <UserProfile />
            <QuizList />
          </div>
        </div>
      </content>
    );
  }
}

export default Main;
