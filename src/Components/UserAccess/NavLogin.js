
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import React, { useState } from 'react';
import './nav.scss';

const NavLogin=()=> {
  return (
   
    
  <nav class="py-2 bg-light border-bottom">
  <div class="container d-flex flex-wrap">
	<ul class="nav me-auto">
	 
	  <li class="nav-item"> <a className="py-2" href="#" aria-label="Product">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
      </a></li>
	</ul>
	<ul class="nav">
	  <li class="nav-item"><Link to="/blog/register" class="nav-link link-dark px-2">Sign Up</Link></li>
	  <li class="nav-item"><Link to="#" class="nav-link link-dark px-2 text-light bg-primary active" aria-current="page">Login</Link></li>
	</ul>
  </div>
</nav>

  );
}

export default NavLogin;
