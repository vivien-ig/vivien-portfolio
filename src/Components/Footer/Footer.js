
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import React, { useState } from 'react';
import './footer.scss';
import twitter from './twitter.png';
import instagram from './instagram.png';
import facebook from './facebook.png';

const Footer=()=> {
  return (
   <>
    
  <div className="">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 bg-dark border-top">
      <p className="col-md-4 mb-0  text-light"><strong>&copy; 2021 THEVIVIENBRAND</strong></p>
  
      <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        
        <ul className="nav list-unstyled ">
          <li className="ms-3"><a className="text-muted" target="_blank" href="https://twitter.com"><img src={twitter} className="bi" width="24" height="24"></img></a></li>
          <li className="ms-3"><a className="text-muted" target="_blank" href="https://facebook.com"><img src={facebook} className="bi" width="24" height="24"></img></a></li>
          <li className="ms-3"><a className="text-muted" target="_blank" href="https://instagram.com"><img src={instagram} className="bi" width="24" height="24"></img></a></li>
        </ul>
      </a>
  
      <ul className="nav col-md-4 justify-content-end ">
        <li className="nav-item"><Link to="/blog/home" className="nav-link px-2 text-light">BlogHome</Link></li>
        <li className="nav-item"><Link to="/" className="nav-link px-2 text-light">MyPortfolio</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-light">Contact Me</Link></li>
        <li className="nav-item"><Link to="/blog/booking" className="nav-link px-2 text-light">BlogBooking</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link px-2 text-light">About Me</Link></li>
        <li className="nav-item"><a href="/sitemap.html" className="nav-link px-2 text-light"> Sitemap</a></li>
      </ul>

      

    </footer>
  </div>
            
       
</>
  );
}

export default Footer;
