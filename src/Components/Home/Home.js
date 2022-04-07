
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import React, { useState } from 'react';
import './home.scss';

const Home=()=> {
  return (
   <main>
      <div className="position-relative overflow-hidden p-5 m-3 p-md-5 m-md-3 text-center text-primary bg-secondary home_bg-custom site-header">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <strong><h3 className="display-5 fw-normal">Hi There! I am</h3>
            <h1 className="display-2 fw-normal">Vivien Igweze</h1>
            <p className="lead fw-normal">A Full stack Web Developer very passionate about bringing ideas and experiences to life on the web</p>
            </strong>
            <Link className="btn bg-primary text-info  " to="/blog/home" style={{fontSize:45}}>
            <strong className="home_bg-custom-link" >Check out My Project</strong>
            </Link>
            {/* <Link className="btn bg-light text-info  " to="/blog/register" style={{fontSize:35}}>
            <strong className="home_bg-custom-link" >Login Page</strong>
            </Link> */}
          </div>
          <div className="product-device shadow-sm d-none d-md-block">

          </div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block">

          </div>
      </div>


      <div className="d-md-flex p-3 flex-md-equal w-100 h-100 my-md-3 ps-md-3">
    <div className="bg-light home_skills-bg-custom opacity-75 me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-primary overflow-hidden">
      <div className=" ">
        <h2 className="display-5">My Skills</h2>
        <p className="lead" style={{fontSize:27 }} >I have over 3yrs experience working with the following technologies</p>
      </div>
      <div className="bg-dark shadow-sm mx-auto " style={{fontSize:25, color:"white", width: 300, minHeight: 300, borderRadius: 41}}>
        <strong>
        Front End 
        </strong>
        <hr/>
        JavaScript <br />
        React <br />
        HTML5 <br />
        SASS <br />
        CSS <br />
        <hr/>
        <strong>
         Back End
        </strong>
        <hr/>
        Node js <br />
        Express <br />

        MSSQL <br />
        Mongo DB

      </div>
    </div>
    <div className="bg-primary p-3 mt-4 home_projects-bg-custom opacity-75 me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-info overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">My Work</h2>
        <p className="lead" style={{fontSize:27 }}>Check out my work</p>
      </div>
      <div className="bg-light shadow-sm mx-auto p-5" 
      style={{textDecoration:"none", fontSize:27, color:"gray", width: 380, minHeight: 100, borderRadius: 41, lineHeight:3}}>
        <strong>
          <div className="home_projects-bg-custom-div">
              <Link className="link-info home_bg-custom-link" to="/blog/home">TheVivBlog</Link> <br />
              {/*<Link className="link-info home_bg-custom-link" to="/blog/home">TheVivBlog</Link>  <br />
               <Link className="link-info" to="/#">VeeTube</Link>  <br /> */}

          </div>
        
        </strong>
      </div>
    </div>
  </div>

</main>
  );
}

export default Home;
