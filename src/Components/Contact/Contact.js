import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas ,fab} from '@fortawesome/free-solid-svg-icons';
import { faCoffee , faUser,faSpinner} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  
  


//const icon = <FontAwesomeIcon icon={faFacebook} />

  return (
    <form  className=" p-5 m-5 container-md">
     <h2 className="text-primary"> Drop A Message</h2>
	 <p className="text-info"><FontAwesomeIcon className="text-dark" icon={faUser} /> connect with me</p>
	 
	 <br/>
	 <div className=" row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
    <div className=" col-md-6 col-sm-4">
      <input  type="text" required name="name" value="" class="form-control" id="inputEmail3" />
    </div>
	</div>

  <div className=" row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className=" col-md-6 col-sm-4">
      <input  type="email" required name="email" value="" class="form-control" id="inputEmail3" />
    </div>
  </div>

  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Details</label>
    <div className="col-md-6 col-sm-4">
      <textarea  required name="details" value="" class="form-control" id="frmdetails" />
    </div>
  </div>
  
  
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
  <i className="">Connect on Linkedin?</i> <a className="text-primary" target="_blank" href="https://linkedin.com/in/vivien-igweze"><FontAwesomeIcon icon={faLinkedin}  /></a>
</form>
  );
};



export default Contact;