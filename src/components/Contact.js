import React, { Component } from 'react';
import {Link} from "react-router-dom"

export default class Contact extends Component {
    render() {
        return (
            <div className="container">
        <h1 className="text-center">Contact Info</h1>
        <br></br>
        <p className="h6" >If you would like to join the community, create a profile, post your own thoughts, follow other users, and share resources. Please click the Sign Up button below.
        </p>
<form>
    <div className="button">
      <Link to="/Signup" type="submit" className="btn btn-success btn-lg btn-block ">Sign Up</Link>
    </div>
</form>
<div>
  <br></br>
</div>
<p className="h6"> If you have any questions or topics you'd like to address, but don't feel like creating a profile feel free to leave it below.</p>
<div>
  <br></br>
</div>
<div className="media">
<i className="far fa-question-circle"></i>
  <div className="media-body">
    <h5 className="mt-1"> Have a question</h5>
    <textarea class="form-control" aria-label="With textarea"></textarea>
    <div><br></br>
<Link type="button" className="btn btn-outline-success btn-lg">Ask</Link></div>
<br></br>

    <div className="media mt-3">
      <i className="far fa-comment-dots"></i>
      <div className="media-body">
        <h5 className="mt-0">Got an opinion</h5>
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  </div>
</div>
<div></div>
<br></br>
<Link type="button" className="btn btn-outline-success btn-lg float-right">Comment</Link>
<br></br>
<div></div>
<br></br>
<br></br>
<Link to="/" type="button" className="btn btn-outline-success btn-lg">Go back to Home page</Link>
<br></br>
<Link to="/about" type="button" className="btn btn-outline-success btn-lg">Go back to About page</Link>
</div>
        )
    }
}
