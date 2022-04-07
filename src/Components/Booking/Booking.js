
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import React, { useState } from 'react';
import './booking.scss';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.png';

const Booking=()=> {
  return (
  
	
    
<main>

  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">BOOK OUR SERVICES</h1>
        <p class="lead text-muted">Choose from any of our  
		service List below. If you require assistance or more information, 
		kindly contact us via our Contact page
		and we will get in touch with you within 24hrs</p>
        <p>
          <a href="#" class="btn btn-primary my-2">Our Services</a>
          <a href="#" class="btn btn-secondary my-2">Our Services</a>
        </p>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-sm-1 row-cols-md-2 ">
        
		<div class="col mb-5" >
          <div class="card shadow-sm" >
            <img src={img1} class=" bd-placeholder-img card-img-top"  /> 

            <div class="card-body">
              <p class="card-text">One Time AD placement</p>
			  <p class="card-text"><strong>$100</strong></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class=" btn btn-sm btn-outline-primary">Book Now</button>
                  </div>
                <small class="text-muted">30 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div class=" col mb-5">
          <div class="card shadow-sm">
		  <img src={img3} class=" bd-placeholder-img card-img-top"  /> 
            <div class="card-body">
			<p class="card-text">Twice Monthly AD placement</p>
			  <p class="card-text"><strong>$200</strong></p>
			<div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-primary">Book Now</button>
                  </div>
                <small class="text-muted">2 hrs</small>
              </div>
            </div>
          </div>
        </div>

        <div class=" col mb-5">
          <div class="card shadow-sm">
             <img src={img4} class=" bd-placeholder-img card-img-top"  /> 
            <div class="card-body">
			<p class="card-text">Thrice Monthly AD placement</p>
			  <p class="card-text"><strong>$300</strong></p>
			  <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-primary">Book Now</button>
                   </div>
                <small class="text-muted">3 hrs</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col mb-5">
          <div class="card shadow-sm">
		  <img src={img5} class=" bd-placeholder-img card-img-top"  /> 
            <div class="card-body">
			<p class="card-text">Twice Weekly AD placement</p>
			  <p class="card-text"><strong>$400</strong></p>
			  <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-primary">Book Now</button>
                  </div>
                <small class="text-muted">4 hrs</small>
              </div>
            </div>
          </div>
        </div>


        <div class=" col mb-5">
          <div class="card shadow-sm">
             <img src={img6} class=" bd-placeholder-img card-img-top"  /> 
            <div class="card-body">
			<p class="card-text">Story Publishing</p>
			  <p class="card-text"><strong>$1000</strong></p>
			   <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-primary">Book Now</button>
                  </div>
                <small class="text-muted">15 hrs</small>
              </div>
            </div>
          </div>
        </div>

        <div class=" col mb-5">
          <div class="card shadow-sm">
             <img src={img2} class=" bd-placeholder-img card-img-top"  /> 
            <div class="card-body">
			<p class="card-text">Investigative Blog</p>
			  <p class="card-text"><strong>$2000</strong></p>
			  <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-primary">Book Now</button>
                  </div>
                <small class="text-muted">30 hrs</small>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
	<p className=" container justify-self-center align-self-center ms-5 mt-4 pt-4">
          <a href="#" class="btn btn-primary my-2">Our Services</a>
          <a href="#" class="btn btn-secondary my-2">Our Services</a>
        </p>
  </div>

</main>


  );
}

export default Booking;
