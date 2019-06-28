import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" to="#">Homeless in MA</a>
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
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Resources
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to="https://suicidepreventionlifeline.org/">Suicide Prevention</Link>
          <Link className="dropdown-item" to="https://www.foodpantries.org/st/massachusetts">Food Pantries</Link>
          <Link className="dropdown-item" to="http://www.section8listmass.org/">Housing Listings</Link>
        </div>
      </li>
    </ul>
  </div>
</nav> 
            </div>
        )
    }
}
