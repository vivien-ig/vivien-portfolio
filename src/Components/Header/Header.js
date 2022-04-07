
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import React, { useState } from 'react';
import './header.scss';

const Header=()=> {
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
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/contact">Contact</Link>
          </li>

         <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">My Project</Link>
            <ul className="dropdown-menu" aria-labelledby="dropdown04">
              <li><Link className="dropdown-item text-primary" to="/blog/home">TheVivBlog</Link></li>
               {/*<li><a className="dropdown-item text-primary" href="/blog/register">User Registration / Login</a></li>
              <li><a className="dropdown-item" href="#">VeeTube</a></li> */}
            </ul>
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

export default Header;
