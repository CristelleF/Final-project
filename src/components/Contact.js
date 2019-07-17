import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  state = {
    showAskAlert: false,
    showCommentAlert: false
  };

  showAlert = alert => {
    this.setState({
      [alert]: true
    })
  }


  closeAlert = alert => {
    this.setState({
      [alert]: false
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Contact Info</h1>
        <br />
        <p className="h6">
          If you would like to join the community, create a profile, post your
          own thoughts, follow other users, and share resources. Please click
          the Sign Up button below.
        </p>
        <form>
          <div className="button">
            <Link
              to="/Signup"
              type="submit"
              className="btn btn-success btn-lg btn-block "
            >
              Sign Up
            </Link>
          </div>
        </form>

        <br />

        <p className="h6">
          If you have any questions or topics you'd like to address, but don't
          feel like creating a profile feel free to leave it below.
        </p>
        <br />
        <div className="media">
          <i className="far fa-question-circle" />
          <div className="media-body">
            <h5 className="mt-1"> Have a question</h5>
            <textarea
              onSubmit={this.onSubmit}
              class="form-control"
              aria-label="With textarea"
            />
            <div>
              <br />
              <button type="button" onClick={this.showAlert.bind(this, "showAskAlert")} className="btn btn-outline-success btn-lg">
                Ask
              </button>
              {this.state.showAskAlert ? (
                <div
                  class="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Got it!</strong> You can check back in a few days for
                  an answer.
                  <button
                    type="button"
                    class="close"
                    onClick={this.closeAlert.bind(this, "showAskAlert")}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              ) : null}
            </div>
            <br />
            <div className="media mt-3">
              <i className="far fa-comment-dots" />
              <div className="media-body">
                <h5 className="mt-0">Got an opinion</h5>
                <textarea
                  onSubmit={this.onSubmit}
                  className="form-control"
                  aria-label="With textarea"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div>
          <button
            type="button"
            onClick={this.showAlert.bind(this, "showCommentAlert")}
            className="btn btn-outline-success btn-lg float-right"
          >
            Comment
          </button>
          <div class="clearfix"></div>
          {this.state.showCommentAlert ? (
            <div
              class="alert alert-warning alert-dismissible fade show "
              role="alert"
            >
              <strong>Got it!</strong> Your comment will be posted anonymously.
              <button
                type="button"
                class="close"
                onClick={this.closeAlert.bind(this, "showCommentAlert")}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          ) : null}
        </div>
        <br />
        <br />
        <br />
        <Link
          to="/"
          type="button"
          className="btn btn-outline-success btn-lg btn-block"
        >
          Go back to Home page
        </Link>
        <br />
        <Link
          to="/about"
          type="button"
          className="btn btn-outline-success btn-lg btn-block"
        >
          Go back to About page
        </Link>
      </div>
    );
  }
}
