import React from 'react';

const Header = () => (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Quezaurus</a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li className="active">
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Test Creator</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <form className="navbar-form navbar-right">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search test" />
          </div>
          <button type="submit" className="btn btn-default">Search</button>
        </form>
      </nav>
    )

export default Header