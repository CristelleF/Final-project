import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Blog extends Component {
  onClick = () => {
    window.$("#exampleModalScrollable").modal("hide");
    this.props.history.push("/");
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
                <h5 className="modal-title" id="exampleModalScrollableTitle" >
                <p 
                  type="title"
                  className="h3"
                  data-dismiss="modal"
                  
                >What I have to say today...
             
                </p>
                </h5>
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
                  Subscibe 
                </button>
              </div>
            </div>
          </div>
        </div>
        <section className="row">
          <div className="card text-left" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">June 2016</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptate?
              </p>
             {/*} <!-- Button trigger modal -->*/}
<button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModalLong">
  Read More..
</button>

{/*<!-- Modal -->*/}
<div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">June 2016</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates quis minima accusantium expedita natus debitis facere veniam doloremque, obcaecati, rem possimus deleniti facilis alias iure soluta dolorem commodi nostrum! Nostrum laborum modi, veritatis, fuga, vel commodi dolore id maiores vitae omnis quae ea? Corporis laboriosam quo recusandae dicta debitis qui.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Next Blog</button>
      </div>
    </div>
  </div>
</div>

            
            </div>
          </div>
          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">August 2016</h5>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam numquam nobis fuga esse blanditiis reiciendis!
              </p>
              <Link to="/pw" className="btn btn-danger">
                Read More..
              </Link>
            </div>
          </div>

          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">October 2016</h5>
              <p className="card-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero cum eaque totam dolore aliquam.
              </p>
              <Link to="/pw" className="btn btn-primary">
                Read More..
              </Link>
            </div>
          </div>
          <div className="card text-right" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">December 2016</h5>
              <p className="card-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo quis sequi quibusdam architecto omnis porro fuga commodi autem illo..
              </p>
              <Link to="/pw" className="btn btn-secondary">
                Read More..
              </Link>
            </div>
          </div>

          <div className="card text-left" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">January 2017</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit eos ipsa sapiente, officia at.
              </p>
              <Link to="/pw" className="btn btn-success">
                Read More..
              </Link>
            </div>
          </div>
          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">March 2017</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, porro labore quaerat nisi itaque quibusdam!
              </p>
              <Link to="/pw" className="btn btn-warning">
                Read More..
              </Link>
            </div>
          </div>

          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">June 2017</h5>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus facere ex perferendis unde veritatis! Ullam velit laborum doloremque laboriosam architecto.
              </p>
              <Link to="/pw" className="btn btn-info">
                Read More..
              </Link>
            </div>
          </div>
          <div className="card text-right" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">September 2017</h5>
              <p className="card-text">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem odit nostrum temporibus, repellat ut error!
              </p>
              <Link to="/pw" className="btn btn-success">
                Read More..
              </Link>
            </div>
          </div>
          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">November 2017</h5>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam numquam nobis fuga esse blanditiis reiciendis!
              </p>
              <Link to="/pw" className="btn btn-danger">
                Read More..
              </Link>
            </div>
          </div>

          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">January 2018</h5>
              <p className="card-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero cum eaque totam dolore aliquam.
              </p>
              <Link to="/pw" className="btn btn-primary">
                Read More..
              </Link>
            </div>
          </div>
          <div className="card text-right" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">March 2018</h5>
              <p className="card-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo quis sequi quibusdam architecto omnis porro fuga commodi autem illo..
              </p>
              <Link to="/pw" className="btn btn-secondary">
                Read More..
              </Link>
            </div>
          </div>

          <div className="card text-left" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">June 2018</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit eos ipsa sapiente, officia at.
              </p>
              <Link to="/pw" className="btn btn-success">
                Read More..
              </Link>
            </div>
          </div>
          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">September 2018</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, porro labore quaerat nisi itaque quibusdam!
              </p>
              <Link to="/pw" className="btn btn-warning">
                Read More..
              </Link>
            </div>
          </div>
          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">November 2018</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, porro labore quaerat nisi itaque quibusdam!
              </p>
              <Link to="/pw" className="btn btn-dark">
                Read More..
              </Link>
            </div>
          </div>

          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">January 2019</h5>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus facere ex perferendis unde veritatis! Ullam velit laborum doloremque laboriosam architecto.
              </p>
              <Link to="/pw" className="btn btn-info">
                Read More..
              </Link>
            </div>
          </div>
          <div className="card text-right" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">March 2019</h5>
              <p className="card-text">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem odit nostrum temporibus, repellat ut error!
              </p>
              <Link to="/pw" className="btn btn-danger">
                Read More..
              </Link>
            </div>
          </div>
          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">May 2019</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, porro labore quaerat nisi itaque quibusdam!
              </p>
              <Link to="/pw" className="btn btn-primary">
                Read More..
              </Link>
            </div>
          </div>

          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">June 2019</h5>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus facere ex perferendis unde veritatis! Ullam velit laborum doloremque laboriosam architecto.
              </p>
              <Link to="/pw" className="btn btn-info">
                Read More..
              </Link>
            </div>
          </div>
          <div className="card text-right" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">July 2019</h5>
              <p className="card-text">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem odit nostrum temporibus, repellat ut error!
              </p>
              <Link to="/pw" className="btn btn-success">
                Read More..
              </Link>
            </div>
          </div>
        </section>
        <br></br>
        <div className="container">
        <div className="button">
<Link to="/" type="submit" className="btn btn-outline-success btn-sm btn-block">Go back to Home page</Link></div>
<div className="button">
  <div>
    <br></br>
  </div>
<Link to="/contact" type="submit" className="btn btn-outline-success btn-sm btn-block">Sign up or ask a question</Link></div>
</div>
<br />

      </div>
    );
  }
}
