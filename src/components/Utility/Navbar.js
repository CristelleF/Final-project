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
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Profile</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Username" aria-label="name"/>
      <div class="col-auto">
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck"/>
        <label class="form-check-label" for="autoSizingCheck">
          Remember me
        </label>
      </div>
    </div>
      <Link className="btn btn-outline-success my-2 my-sm-0" to="/profile" type="submit">Login</Link>
    </form> 
  </div>
</nav> 
  </div>
        )
    }
}
