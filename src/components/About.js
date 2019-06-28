import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div>
               <p className= "text-center h1">How it all Started</p> 
               <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, libero. Debitis quos nisi, possimus omnis excepturi explicabo fugiat animi harum ea incidunt laborum sequi facere perferendis ratione dolorum consequatur delectus illum quibusdam, odio magnam voluptates mollitia dignissimos? Vitae nisi ipsa perspiciatis officiis ex blanditiis explicabo? Voluptatem, rerum ex, fuga ad modi culpa tenetur nihil nisi deserunt neque, rem earum suscipit dolor et maiores eos sed corporis repudiandae aperiam mollitia perferendis amet! Culpa deserunt suscipit illum!</p>
               <br></br>
<Link to="/" type="button" className="btn btn-outline-success btn-lg btn-block">Go back to Home page</Link>
<Link to="/contact" type="button" className="btn btn-outline-success btn-lg btn-block">Sign up or ask a question</Link>
            </div>
        );
    }
}
