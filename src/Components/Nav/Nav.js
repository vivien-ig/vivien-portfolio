
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import React, { useState } from 'react';
import './nav.scss';

const Nav=()=> {
  return (
   
    <header className="site-header sticky-top py-1 opacity-75 nav_custom">
    <nav className="container d-flex flex-column flex-md-row justify-content-around ">
      <Link className="py-2" to="/blog/home" aria-label="Product">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <Link to="/blog/home" className=" nav-menuitem-custom py-2  d-md-inline-block" >Blog Home</Link>
      <Link to="/blog/about" className="nav-menuitem-custom py-2  d-md-inline-block" >About</Link>
      <Link to="/blog/contact" className="nav-menuitem-custom py-2  d-md-inline-block" >Contact</Link>
      <Link to="/blog/booking" className="nav-menuitem-custom py-2  d-md-inline-block" >Online Booking</Link>

    </nav>
  </header>

  );
}

export default Nav;
