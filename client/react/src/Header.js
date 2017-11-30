import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      query: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand">Quezaurus</a>
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
        <div id="navbar3">
          <ul className="nav navbar-nav">
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/quiz-list" activeClassName="active">
                Your quizs
              </NavLink>
            </li>
            <li>
              <NavLink to="/quiz-search" activeClassName="active">
                Search quizs
              </NavLink>
            </li>
            <li>
              <NavLink to="/quiz-form" activeClassName="active">
                Create new quiz
              </NavLink>
            </li>
            <li>
              <NavLink to="/user-form" activeClassName="active">
                Register Now!
              </NavLink>
            </li>
            <li>
              <NavLink to="/quiz" activeClassName="active">
                Quiz
              </NavLink>
            </li>
            {/* <li>
            <NavLink to="/about" activeClassName="active">About us</NavLink>
            </li>
            <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li> */}
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
