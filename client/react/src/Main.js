import React, { Component } from "react";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import QuizList from "./components/QuizList";
import QuizSearch from "./components/QuizSearch";
import QuizForm from "./components/Forms/QuizForm";
import UserForm from "./components/Forms/UserForm";

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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user-profile" component={UserProfile} />
          <Route path="/quiz-list" component={QuizList} />
          <Route path="/quiz-form" component={QuizForm} />
          <Route path="/user-form" component={UserForm} />
          <Route path="/quiz-search" component={QuizSearch} />
          {/* <Route path='/about' component={ About } />
          <Route path='/contact' component={ Contact } /> */}
        </Switch>
      </content>
    );
  }
}

export default Main;
