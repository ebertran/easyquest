import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      // TODO???
    };
  }

  render() {
    return (
      <div>
          <div>
                <img className="logo img-responsive center-block" src="../images/_logo-white.svg" alt="#" />
            <div className="text-center">
              <h2>Where your quizs will rule the Earth</h2>
              </div>
          </div>
        </div>

    );
  }
}

export default Home;
