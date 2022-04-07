
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import React, { useState } from 'react';
import './about.scss';
import picViv from './picViv.jpg'

const About=()=> {
  return (

    <main className="bg-light custom_formatting">

  <div id="myCarousel" class="carousel slide about_imgCard-custom bg-info custom_formatting" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active ">
      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto  " width="500" height="500" />

        <div class="container  ">
          <div class="carousel-caption text-start text-primary ">
            <h1>Meet Vivien Igweze</h1>
            <p>I am an experienced, Highly motivated and progress-focused web developer who is passionate about bringing dreams to reality </p>
            <p><Link class="btn btn-lg btn-primary" to="/blog/home">Check out my work</Link></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto about_imgCard-custom " width="500" height="500" />

        <div class="container">
          <div class="carousel-caption text-primary">
            <h1>My Skills</h1>
            <p>I have over 3yrs experience working with the following Technologies</p>
            <div class="row">
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Front End</h5>
                      <p class="card-text">React, React Hooks , Redux, HTML5, JavaScript, CSS, SASS, Bootstrap</p>
                      <Link to="/blog/home" class="btn btn-primary">Check out My Work</Link>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Back End</h5>
                      <p class="card-text">Node.js, Express, JWT, Java, C#, Mongo DB, MSSQL database and MySQL database</p>
                      <Link to="/blog/home" class="btn btn-primary">Check out My Work</Link>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div class="carousel-item">
      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto about_imgCard-custom " width="500" height="500" />

        <div class="container">
          <div class="carousel-caption text-end text-primary">
            <h1>My Project</h1>
            <p className="fs-6">TheVivBlog</p>
            <p><Link class="btn btn-lg btn-primary" to="/blog/home">Check it out</Link></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="container marketing">

  <div className="bg-light text-primary ">
   <hr className="featurette-divider" />
    <h2 className="featurette-heading">More About Me </h2>
    <hr className="featurette-divider" />
  </div>
    

    <div className="row featurette bg-info text-primary custom_formatting">
      <div className="col-md-7">
        <h2 className="featurette-heading"> Vivien Igweze <span class="text-muted">    Experienced Web Developer</span></h2>

        <hr className="featurette-divider" />

        <ul class="list-unstyled">
            <li class="text-primary"><strong>Education and Trainings:</strong>
                <ul>
                <li class="text-light"><strong>Web Technology Specialist Diploma, Mississauga</strong> <i class="text-muted">2022</i></li> 
                  <li class="text-light"><strong>Web Development BootCamp, Toronto</strong> <i class="text-muted">2019</i></li>
                  <li class="text-light"><strong>B.Sc Computer Science, Nigeria</strong> <i class="text-muted">2006</i></li>
                </ul>
            </li>
          </ul>

          <hr className="featurette-divider" />

          <ul class="list-unstyled">
            <li class="text-primary"><strong> Experience Summary:</strong>
                <ul>
                  <li class="text-light"><strong>Personal Development - Full Stack Web Developer </strong><i class="text-muted">  2018 - Till Date</i></li>
                  <li class="text-light"><strong>Full-Time Mom , Continuous Self-Learning and Self-Development </strong><i class="text-muted"> 2018 -2021</i></li>
                  <li class="text-light"><strong>Front End Application Developer & Support</strong><i class="text-muted"> 2011 -2018</i></li>
                </ul>
            </li>
          </ul>
      

      </div>
      <div className="col-md-5">
        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto about_card-custom " width="500" height="500" />
      </div>
    </div>

    <hr className="featurette-divider" />

    
  </div>


  
</main>
  

  );
}

export default About;
