import React from 'react';

const Header = () => (
  <nav class="navbar navbar-default">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Quezaurus</a>
        </div>
        <ul class="nav navbar-nav">
            <li>
                <a href="#">Home</a>
            </li>
            <li class="active">
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
        <form class="navbar-form navbar-right">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Search test">
            </div>
            <button type="submit" class="btn btn-default">Search</button>
        </form>
    </nav>
)

export default Header