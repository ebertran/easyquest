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
      .then(() => {
        this.setState(prevState => ({
          actualItem: {
            question: prevState.questions[0].text,
            questionId: prevState.questions[0]._id,
            answer1: prevState.questions[0].answers[0].text,
            answer1Id: prevState.questions[0].answers[0]._id,
            answer2: prevState.questions[0].answers[1].text,
            answer2Id: prevState.questions[0].answers[1]._id
          }
        }));
      })
      .then(() => console.log(this.state))
      .catch(function(err) {
        console.error(err);
      });
  }
}

export default Quiz;
