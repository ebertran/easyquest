import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import QuizList from "./components/QuizList";
import QuizSearch from "./components/QuizSearch";
import Quiz from "./components/Quiz";
import QuizForm from "./components/forms/QuizForm";
import UserForm from "./components/forms/UserForm";
// import Results from "./components/results";

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
          <Route path="/quiz-search/:query" component={QuizSearch} />
          <Route path="/quiz/:id" component={Quiz} />
          {/* <Route path="/results/:quizId" component={Results} /> */}
          {/* <Route path='/about' component={ About } />
          <Route path='/contact' component={ Contact } /> */}
        </Switch>
      </content>
    );
  }
}

export default Main;
