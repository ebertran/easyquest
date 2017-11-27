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
        <header className="row">
          <div className="col-sm-offset-1 col-sm-5">
            <img className="logo" src="../images/t-rex.png" alt="#" />
          </div>
          <div className="col-sm-6">
            <div className="row">
              <form className="form-horizontal">
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="email">
                    Email:
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="pwd">
                    Password:
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="password"
                      className="form-control"
                      id="pwd"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-8">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-12 separator login">
            <h1 className="text-center super-title"><span className="super-title">Quezaurus</span></h1>
            <h1 className="text-center">When quizs ruled the Earth</h1>
          </div>
        </header>
        <section className="thumbnails-info text-center">
          <div className="container">
            <div className="row">
              <div className="text-center col-sm-4">
                <img src="../images//command.png" className="mini-logo" />
                <h3>Test it!</h3>
              </div>
              <div className="text-center col-sm-4">
                <img src="../images//statistics.png" className="mini-logo" />
                <h3>Discover your gamer personality</h3>
              </div>
              <div className="text-center col-sm-4">
                <img src="../images/command-old.png" className="mini-logo" />
                <h3>See your personal recomendation</h3>
              </div>
             
            </div>
          </div>
        </section>
      </div>
      
    );
  }
}

export default Home;
