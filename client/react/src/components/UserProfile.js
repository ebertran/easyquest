import React, { Component } from "react";
import axios from "axios";

import Logic from "../logic/Logic";
const logic = new Logic();

class UserProfile extends Component {
  constructor() {
    super();

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    logic
      .retrieveUser()
      .then(user => {
        this.setState({ user });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2 profile">
            <img className="avatar" src="../images/user4.png" alt="#" />
            <h3 className="text-left">{this.state.user.username}</h3>
            <h5 className="text-left">Name: {this.state.user.name}</h5>
            <h5 className="text-left">Surname: {this.state.user.surname}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
