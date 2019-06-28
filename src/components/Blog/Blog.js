import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Blog extends Component {

    onClick=() => {
        window.$("#exampleModalScrollable").modal("hide");
        this.props.history.push("/contact");
    }

  render() {
    return (
      <div>
          
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalScrollable"
        >
          Read Me...
        </button>

        <div
          class="modal fade"
          id="exampleModalScrollable"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalScrollableTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalScrollableTitle" />
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quo autem eligendi quam ut fugit. Doloremque quod reprehenderit sit nisi aperiam inventore. Neque voluptates eos perferendis libero, illum cumque quam dolore earum aperiam quae aliquam numquam possimus quisquam doloremque odio est adipisci minima doloribus velit excepturi accusamus, temporibus quasi dolor architecto. Repellendus doloremque quae, hic laborum reprehenderit cupiditate voluptas, natus est, facere velit odit esse ipsam a pariatur amet modi minus molestiae totam repellat in autem facilis dolores. Nulla, commodi perferendis? Corporis adipisci facere fugiat corrupti obcaecati modi? Ea maxime harum eos ipsam voluptates necessitatibus, dolorem qui veritatis vero aliquid.</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button onClick={this.onClick}  class="btn btn-info" >
                  Join my blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
