import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <div>
              <Footer>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
      </ul>
    </div>
    </Footer>
    </div>
        )
    }
}
