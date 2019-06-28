import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Blog extends Component {
  onClick = () => {
    window.$("#exampleModalScrollable").modal("hide");
    this.props.history.push("/contact");
  };

  render() {
    return (
      <div>
        {/* Jumbotron */}
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Daily Blogs</h1>
            <p className="lead">
              Welcome!!....This is where you can read my personal blogs, both
              past and current. Click on the Read Me button for the latest blog.
              Or choose any of my previous blogs from the past.
            </p>
            <button
              type="button"
              className="btn btn-light float-right"
              data-toggle="modal"
              data-target="#exampleModalScrollable"
            >
              Read Me...
            </button>
          </div>
        </div>

        {/* Read more modal */}
        <div
          className="modal fade"
          id="exampleModalScrollable"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalScrollableTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalScrollableTitle" />
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, quo autem eligendi quam ut fugit. Doloremque quod
                reprehenderit sit nisi aperiam inventore. Neque voluptates eos
                perferendis libero, illum cumque quam dolore earum aperiam quae
                aliquam numquam possimus quisquam doloremque odio est adipisci
                minima doloribus velit excepturi accusamus, temporibus quasi
                dolor architecto. Repellendus doloremque quae, hic laborum
                reprehenderit cupiditate voluptas, natus est, facere velit odit
                esse ipsam a pariatur amet modi minus molestiae totam repellat
                in autem facilis dolores. Nulla, commodi perferendis? Corporis
                adipisci facere fugiat corrupti obcaecati modi? Ea maxime harum
                eos ipsam voluptates necessitatibus, dolorem qui veritatis vero
                aliquid.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button onClick={this.onClick} className="btn btn-info">
                  Join my blog
                </button>
              </div>
            </div>
          </div>
        </div>
        <section class="row">
          <div className="card text-left" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to="#" className="btn btn-dark">
                Read More..
              </Link>
            </div>
          </div>
          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to="#" className="btn btn-danger">
                Read More..
              </Link>
            </div>
          </div>

          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to="#" className="btn btn-primary">
                Read More..
              </Link>
            </div>
          </div>
          <div className="card text-right" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to="#" className="btn btn-secondary">
                Read More..
              </Link>
            </div>
          </div>

          <div className="card text-left" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to="#" className="btn btn-success">
                Read More..
              </Link>
            </div>
          </div>
          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to="#" className="btn btn-warning">
                Read More..
              </Link>
            </div>
          </div>

          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to="#" className="btn btn-info">
                Read More..
              </Link>
            </div>
          </div>
          <div className="card text-right" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to="#" className="btn btn-success">
                Read More..
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
