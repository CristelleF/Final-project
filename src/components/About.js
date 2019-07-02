import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div className="container">
               <p className= "text-center h1">How it all Started</p> 
               <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique beatae quasi, blanditiis harum nam ut consequatur. Explicabo exercitationem animi natus? Eos sed culpa tenetur eveniet atque dolor aperiam neque est quidem debitis nam sequi, aliquid porro perspiciatis, harum earum? Magni hic neque iste culpa quaerat nesciunt ea accusantium quam dolore vel, asperiores dolorum esse? Incidunt qui architecto, sit explicabo error voluptatibus cumque sequi, molestiae nesciunt recusandae molestias, vitae quidem quisquam eius ullam repellendus consequatur. Repudiandae, aperiam voluptas neque dignissimos, voluptatibus iure ipsum perspiciatis veritatis quo voluptatum similique ducimus cupiditate ab beatae inventore! Libero magni unde suscipit modi, ipsa tempora, ad iusto molestiae minus accusantium earum fuga eius dolores cumque vel aspernatur quia officia fugiat. Sit laboriosam obcaecati molestiae quis vitae reprehenderit, assumenda itaque sapiente nemo perspiciatis eius quod. Hic molestiae reprehenderit impedit. Ex culpa expedita illum tempora vel deserunt animi optio. Fugiat, temporibus! Eaque fugiat alias corrupti accusantium repudiandae dolorum.</p>
               <br></br>
<div className="button">
<Link to="/" type="submit" className="btn btn-outline-success btn-lg btn-block">Go back to Home page</Link></div>
<div className="button">
<Link to="/contact" type="submit" className="btn btn-outline-success btn-lg btn-block">Sign up or ask a question</Link></div>
            </div>
        );
    }
}
