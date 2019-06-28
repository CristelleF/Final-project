import React, { Component } from 'react';
import {Link} from "react-router-dom"

export default class Home extends Component {
    render() {
        return (

            <div class="jumbotron">
            <h1 class="display-4">Homeless not Hopeless...</h1>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum laboriosam vero saepe ea error sint a. Impedit voluptatibus magni dolorem temporibus necessitatibus error commodi sed, officiis placeat vero sint. Quae est sit id magni at cum quos eveniet, cumque nesciunt facilis nam ut aspernatur. Quos sit possimus consequatur nisi dolore?</p>
            <hr class="my-4"/>
            <p>To see my latest blog, click on the button below and feel free to join or leave a comment</p>
            <Link className="btn btn-success btn-lg" to='/blog' role="button">Start reading</Link>
          </div>
        )
    }
}
