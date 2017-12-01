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
      
          <div className="col-sm-2 profile">
            <div className="avatar">
              <img className="dino" src="../images/user-triceratops.svg" alt="#" />
              </div>
            
            <h3 className="text-left">{this.state.user.username}</h3>
            <h5 className="text-left">Name: {this.state.user.name}</h5>
            <h5 className="text-left">Surname: {this.state.user.surname}</h5>
          </div>
        
    );
  }
}

export default UserProfile;
