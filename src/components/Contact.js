import React, { Component } from 'react';
import {Link} from "react-router-dom"

export default class Contact extends Component {
    render() {
        return (
            <div className="container">
        <h1>Contact Info</h1>
        <p>If you would like to join my blog feel free to leave your info.
        </p>
<form>
  <div className="form-row align-items-center">
    <div className="col-auto">
      <label className="sr-only" for="inlineFormInput">Name</label>
      <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Username"/>
    </div>
    <div className="col-auto">
      <label className="sr-only" for="inlineFormInputGroup">Username</label>
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">Email</div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter email address"/>
      </div>
    </div>
    <div className="col-auto">
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
        <label className="form-check-label" for="autoSizingCheck">
          Remember me
        </label>
      </div>
    </div>
    <div className="button">
      <Link to="/profile" type="submit" className="btn btn-success ">Join</Link>
    </div>
  </div>
</form>
<p> Also if you have any questions or topics you'd like to address feel free to leave it below.</p>
<div className="media">
<i className="far fa-question-circle"></i>
  <div className="media-body">
    <h5 className="mt-0">Ask a Question</h5>
    <textarea class="form-control" aria-label="With textarea"></textarea>
    <div><br></br>
<Link type="button" className="btn btn-outline-success btn-lg float-right">Submit</Link></div>
<br></br>

    <div className="media mt-3">
      <a className="mr-3" href="#">
      <i className="far fa-comment-dots"></i>
      </a>
      <div className="media-body">
        <h5 className="mt-0">Leave a comment</h5>
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  </div>
</div>
<div></div>
<br></br>
<Link type="button" className="btn btn-outline-success btn-lg float-right">Submit</Link>
<br></br>
<div></div>
<br></br>
<br></br>
<Link to="/" type="button" className="btn btn-outline-success btn-lg btn-block">Go back to Home page</Link>
<Link to="/about" type="button" className="btn btn-outline-success btn-lg btn-block">Go back to About page</Link>
</div>
        )
    }
}
