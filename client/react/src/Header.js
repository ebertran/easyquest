import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="navbar-header">
      <a className="navbar-brand">Quezaurus</a>
    </div>
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
      {/* <li>
          <NavLink to="/about" activeClassName="active">About us</NavLink>
          </li>
          <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li> */}
    </ul>
    <form className="navbar-form navbar-right">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Search test" />
      </div>
      <button type="submit" className="btn btn-default">
        Search
      </button>
    </form>
  </nav>
);

export default Header;
