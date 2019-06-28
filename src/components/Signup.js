import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Signup extends Component {
    render() {
        return (
<div>
<div class="media text-center">
  <div class="media-body">
    <h3 class="mt-0">Join Here</h3>
    By filling out your profile you can login at anytime and interact with other followers, post a comment, or ask a question.
  </div>
</div>
<br></br>
               <form>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label for="validationServer01">First name</label>
      <input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" value="" required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label for="validationServer02">Last name</label>
      <input type="text" className="form-control is-valid" id="validationServer02" placeholder="Last name" value="" required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label for="validationServerUsername">Username</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend3">@</span>
        </div>
        <input type="text" className="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required/>
        <div className="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationServer03">City</label>
      <input type="text" className="form-control is-invalid" id="validationServer03" placeholder="City" required/>
      <div className="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label for="validationServer04">State</label>
      <input type="text" className="form-control is-invalid" id="validationServer04" placeholder="State" required/>
      <div className="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label for="validationServer05">Zip</label>
      <input type="text" className="form-control is-invalid" id="validationServer05" placeholder="Zip" required/>
      <div className="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required/>
      <label className="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <Link to="/profile" className="btn btn-success" type="submit">Enter Profile</Link>
</form> 
            </div>
        )
    }
}
