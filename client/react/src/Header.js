import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

// import Logic from "../logic/Logic";
// const logic = new Logic();

class Header extends Component {
  constructor() {
    super();

    this.state = {
      query: "",
      user: {}
    };
  }

  // componentDidMount() {
  //   logic
  //     .retrieveUser()
  //     .then(user => {
  //       console.log(user)
  //       this.setState({ user });
  //     })
  //     .catch(function(err) {
  //       console.error(err);
  //     });
  // }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
        
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar3"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <div id="navbar3" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
          <li className="navbar-li">
              <NavLink to="/" exact activeClassName="active">
              <img className="mini-logo" src="../images/mini-logo-white.svg" alt="#" /> Quezaurus
              </NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/new-quizs" activeClassName="active">
                Lattests quizs
              </NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/quiz-list" activeClassName="active">
                Profile
              </NavLink>
            </li>
          </ul>

          <form className="navbar-form navbar-right">
            <div className="form-group">
              <input
                name="query"
                type="text"
                className="form-control"
                placeholder="Search test"
                onChange={this.handleChange}
              />
            </div>
            <Link to={`/quiz-search/${this.state.query}`}>
              <button type="submit" className="btn btn-default">
                Search
              </button>
            </Link>
          </form>

        </div>
      </nav>
    );
  }
}

export default Header;
