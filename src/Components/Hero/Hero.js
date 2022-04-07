
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import React, { useState } from 'react';
import './hero.scss';

const Hero=()=> {
  return (
   
        <div className="body-mainCustom container-lg container-md container-sm ">
          <h3>Hi There! I am</h3>
            <h1>Vivien Igweze</h1>
            <p className="lead">A Full stack Web Developer very passionate about bringing ideas and experiences to life on the web</p>
           
            <Link to="/alumni" >
              <button className="btn btn-lg btn-secondary fw-bold border-white bg-white text-primary">
                Check out My Alumni website
              </button>
            </Link>
            
        </div>

  );
}

export default Hero;
