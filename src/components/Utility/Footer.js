import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>

             {/*<!-- Footer -->*/}
<footer className="page-footer font-small mdb-color pt-4">

  {/*<!-- Footer Links -->*/}
  <div className="container text-center text-md-left">

    {/*<!-- Footer links -->*/}
    <div className="row text-center text-md-left mt-3 pb-3">

     {/*} <!-- Grid column -->*/}
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Shelter Services</h6>
        <p>If you are at risk of or currently experiencing homelessness, the first step is to get in touch with the shelter system in your community.You may need to call a hotline or go to a community-designated organization for homeless services..</p>
      </div>
      {/*<!-- Grid column -->*/}

      <hr className="w-100 clearfix d-md-none"></hr>

      {/*<!-- Grid column -->*/}
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">The Continuum of Care (CoC)</h6>
        <p>
          <a href="https://resources.hud.gov/">Continuum of Care</a>
        </p>
        <p>
          <a href="http://www.211.org/">Local 2-1-1</a>
        </p>
        <p>
          <a href="http://nationalhomeless.org/references/need-help/">National Homelessness</a>
        </p>
        <p>
          <a href="https://www.mass.gov/orgs/department-of-transitional-assistance/locations?_page=1">DTA Office Locations</a>
        </p>
      </div>
     {/*} <!-- Grid column -->*/}

      <hr className="w-100 clearfix d-md-none"/>

      {/*<!-- Grid column -->*/}
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
        <p>
          <a href="https://www.nafcclinics.org/find-clinic">Find Free Clinics</a>
        </p>
        <p>
          <a href="https://www.va.gov/HOMELESS/NationalCallCenter.asp">Veterans</a>
        </p>
        <p>
          <a href="https://www.thehotline.org/help/path-to-safety/">Domestic Violence</a>
        </p>
        <p>
          <a href="https://www.1800runaway.org/">Young Adults & Teens</a>
        </p>
      </div>

      {/*<!-- Grid column -->*/}
      <hr className="w-100 clearfix d-md-none"></hr>

     
      {/*<!-- Grid column -->*/}

    </div>
    {/*<!-- Footer links -->*/}

    <hr></hr>

    {/*<!-- Grid row -->*/}
    <div className="row d-flex align-items-center">

      {/*<!-- Grid column -->*/}
      <div className="col-md-7 col-lg-8">

        {/*<!--Copyright-->*/}
        <p className="text-center text-md-left">© 2019 Copyright:
          <a href="/">
            <strong> Homeless in MA</strong>
          </a>
        </p>

      </div>
      {/*<!-- Grid column -->*/}

     {/* <!-- Grid column -->*/}
      <div className="col-md-5 col-lg-4 ml-lg-0">

        {/*<!-- Social buttons -->*/}
        <div className="text-center text-md-right">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/" className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/?lang=en" className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/feed/" className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>
      {/*<!-- Grid column -->*/}

    </div>
   {/*} <!-- Grid row -->*/}

  </div>
  {/*<!-- Footer Links -->*/}

</footer>
{/*<!-- Footer --></hr>*/} 
    </div>


        )
    }
}
