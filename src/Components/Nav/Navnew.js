
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import React, { useState } from 'react';
import './nav.scss';

const Navnew=()=> {
  return (
   
    <nav className="navbar navbar-expand-md navbar-dark bg-dark nav_header-custom" aria-label="Fourth navbar example">
    <div className="container-fluid">
    <Link className="py-2" to="/" aria-label="Product">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/blog/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/blog/contact">Contact</Link>
          </li>
		  <li className="nav-item">
            <Link className="nav-link " to="/blog/booking">Online Booking</Link>
          </li>

          
          
              
             
        </ul>
        <form>
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </div>
  </nav>


  );
}

export default Navnew;
