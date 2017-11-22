import React, { Component } from "react";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import QuizList from "./components/QuizList";
import QuizForm from "./components/QuizForm";
import UserForm from "./components/UserForm";

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
          <div className="container">
            <div className="row">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/user-profile" component={UserProfile} />
                <Route path="/quiz-list" component={QuizList} />
                <Route path="/quiz-form" component={QuizForm} />
                <Route path="/user-form" component={UserForm} />
                {/* <Route path='/about' component={ About } />
          <Route path='/contact' component={ Contact } /> */}
              </Switch>
            </div>
          </div>
        </content>
    );
  }
}

export default Main;
