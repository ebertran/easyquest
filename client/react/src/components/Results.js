import React, { Component } from "react";

import Logic from "../logic/Logic";
const logic = new Logic();

class Results extends Component {
  constructor() {
    super();
    this.state = {
      quizId: "",
      users: []
    };
  }

  componentDidMount() {
    const quizId = this.props.match.params.id;
    logic
      .listUsersById(quizId)
      .then(users => {
        this.setState({ users: questions.questions });
      })
      .then(() => console.log(this.state))
      .catch(function(err) {
        console.error(err);
      });
  }
}

export default Results;
