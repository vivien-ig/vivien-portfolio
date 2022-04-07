
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import React, { useState } from 'react';
import './contact.scss';
//import picViv from './picViv.jpg'

const Contact=()=> {
  return (
   
    <form>

<div class="container-md ms-5 mb-5 pb-5 mt-5 pt-5 contact_card-custom">
	<div class="row ">
	<div class="col-md-8 align-self-center">
		<div className="row mb-3">
		<h2>DROP A MESSAGE</h2>
		<br/>
		
    <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" name="inputName" />
    </div>
  </div>

  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-6">
      <input type="email" class="form-control" name="inputEmail" />
    </div>
  </div>

  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Description</label>
    <div class="col-sm-6">
      <textarea class="form-control" name="description"  />
    </div>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit </button>
  </div>
  </div>
  </div >
</form>

  );
}

export default Contact;
