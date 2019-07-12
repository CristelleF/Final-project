import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Signup extends Component {
    render() {
        return (
<div className="container">
<div className="media text-center">
  <div className="media-body">
    <h3 className="mt-0">Join Here</h3>
    By filling out your profile you can login at anytime and interact with other followers, post a comment, or ask a question.
  </div>
</div>
<br/>
<form>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label for="validationServer01">First name</label>
      <input type="text" className="form-control" id="validationServer01" placeholder="First name"  required/>
      <div className="valid-feedback">
        
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label for="validationServerName">Last name</label>
      <input type="text" className="form-control" id="validationServerName" placeholder="Last name"  required/>
      <div className="valid-feedback">
        
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label for="validationServerUsername">Username</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend3">@</span>
        </div>
        <input type="text" className="form-control" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required/>
        <div className="invalid-feedback">
          
        </div>
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationServer03">City</label>
      <input type="text" className="form-control" id="validationServer03" placeholder="City" required/>
      <div className="invalid-feedback">
        
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label for="validationServer04">State</label>
      <input type="text" className="form-control" id="validationServer04" placeholder="State" required/>
      <div className="invalid-feedback">
      
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label for="validationServer05">Zip</label>
      <input type="text" className="form-control" id="validationServer05" placeholder="Zip" required/>
      <div className="invalid-feedback">
        
      </div>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck3" required/>
      <label className="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <Link className="btn btn-info"  to="/profile" type="submit">Join the Community</Link>
</form>
            </div>
        )
    }
}
