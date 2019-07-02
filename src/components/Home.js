import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron">
          <h1 class="display-4">Homeless not Hopeless...</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            laboriosam vero saepe ea error sint a. Impedit voluptatibus magni
            dolorem temporibus necessitatibus error commodi sed, officiis
            placeat vero sint. Quae est sit id magni at cum quos eveniet, cumque
            nesciunt facilis nam ut aspernatur. Quos sit possimus consequatur
            nisi dolore?
          </p>
          <hr class="my-4" />
          <p>
            To see my latest blog, click on the button below and feel free to
            join or leave a comment
          </p>
          <Link className="btn btn-success btn-lg" to="/blog" role="button">
            Start reading
          </Link>
        </div>
        <div className="row">
          <div className="col-lg-4" />
          <div className="col-lg-4">
              <div className="container">
            <p className="text-center">
              If you would like to subscribe to my blog feel free to leave your
              info.
            </p>
            <form>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="sr-only" for="inlineFormInput">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInput"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="sr-only" for="inlineFormInputGroup">
                      Username
                    </label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">Email</div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                </div>
                </div>
                <div className="text-center">
                    <button
                      
                      type="submit"
                      className="btn btn-success btn-block"
                    >
                      Subscribe
                    </button>
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Thank You!</strong> You can check your email for alerts on the most recent blog.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
                    <div>
                        <br></br>
                        <p className="h6">If you want to join, create a profile, and start making connections. Click the Join the community button below.  </p>
                    </div>
                </div>
                <div className="text-center">
                    <Link
                      to="/Signup"
                      type="submit"
                      className="btn btn-success btn-block"
                    >
                      Join the community
                    </Link>
                </div>
            </form>
          </div>
          </div>
          <div className="col-lg-4" />
        </div>
      </div>
    );
  }
}
