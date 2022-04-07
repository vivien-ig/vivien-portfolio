import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {register} from '../../actions/auth';
import {setAlert} from '../../actions/alert';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faCoffee , faUser,faSpinner} from '@fortawesome/free-solid-svg-icons';
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const Register=({onRegisterChange, setAlert, register})=>{
	//state
const[formData, setFormData]=useState({
	name:'',
	email:'',
	password:'',
	username:''
});

//destructure state
const {name,email,password,username} = formData;

//const registerurl= "http://localhost:3000/api/register";
//save form field entries to state onchange
const onFormChange=(e)=>{
	e.preventDefault();
	setFormData({...formData, [e.target.name]:e.target.value});
	/* console.log("state1 is"+name);
	console.log("state2 is"+email);
	console.log("state3 is"+password);
	console.log("state4 is"+username); */
}


const onSubmit=async (e)=>{
	e.preventDefault();
	//console.log(formData);
	
  register({name, email, password});
	};

	return(
<form onSubmit={e=>onSubmit(e)} className=" p-5 m-5 container-md">
     <h2 className="text-primary"> Sign Up</h2>
	 <p className="text-info"><FontAwesomeIcon className="text-dark" icon={faUser} /> create your account</p>
	 
	 <br/>
	 <div className=" row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
    <div className=" col-md-6 col-sm-4">
      <input onChange={e=>onFormChange(e)} type="text" required name="name" value={name} class="form-control" id="inputEmail3" />
    </div>
	</div>

  <div className=" row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className=" col-md-6 col-sm-4">
      <input onChange={onFormChange} type="email" required name="email" value={email} class="form-control" id="inputEmail3" />
    </div>
  </div>

  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-md-6 col-sm-4">
      <input onChange={onFormChange} type="password" required name="password" value={password} class="form-control" id="inputPassword3" />
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">UserName</label>
    <div className="col-md-6 col-sm-4">
      <input onChange={onFormChange} type="text" required name="username" value={username} class="form-control" id="inputPassword3" />
    </div>
  </div>
  
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign Up</button>
  </div>
  <i className="">Already have an account? <Link className="text-primary" to="/blog/login">sign in</Link></i>
</form>
	)
}
export default connect(
	null,
	{setAlert, register}
)(Register);
