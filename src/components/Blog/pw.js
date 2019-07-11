import React, { Component } from 'react';
import {Link} from "react-router-dom"

export default class pw extends Component {
    render() {
        return (
            <div>
                 {/*} <!-- Button trigger modal -->*/}
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Read More..
</button>

{/*<!-- Modal -->*/}
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Next Blog</button>
      </div>
    </div>
  </div>
</div>
            </div>
        )
    }
}
