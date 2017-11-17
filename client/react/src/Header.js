import React from 'react';

const Header = () => (
      <nav className="navbar navbar custom">
        <div className="navbar-header">
          <a className="navbar-brand title" href="#">Quezaurus</a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <a className="title" href="#">Home</a>
          </li>
          <li className="active">
            <a class="title" href="#">Profile</a>
          </li>
          <li>
            <a className="title" href="#">Test Creator</a>
          </li>
          <li>
            <a className="title" href="#">About us</a>
          </li>
          <li>
            <a className="title" href="#">Contact</a>
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