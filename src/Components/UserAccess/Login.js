import { Link } from "react-router-dom";
//import "./posts.scss";
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faCoffee , faUser,faSpinner} from '@fortawesome/free-solid-svg-icons';

export default function SinglePost() {

  const[formData, setFormData]=useState({
    
    email:'',
    password:''
  });

  //destructure
const {email, password}= formData;

const onChange=(e)=>{
  e.preventDefault();
	setFormData({...formData,[e.target.name]:e.target.value});
}

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);

   
  }
  return (
   <form onSubmit={e=>onSubmit(e)} className=" p-5 m-5 container-md">
     <h2 className="text-primary"> Login</h2>
     <p className="text-info"><FontAwesomeIcon className="text-dark" icon={faUser} /> login to your account</p>

     <br/>
  <div className=" row mb-3">
    <label for="inputEmail3" className="col-4 col-form-label">Email</label>
    <div className=" col-md-6 col-6">
      <input onChange={onChange} type="email" name="email" required class="form-control" id="inputEmail3" />
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-4 col-form-label">Password</label>
    <div className="col-md-6 col-6">
      <input onChange={onChange} type="password" name="password" required class="form-control" id="inputPassword3" />
    </div>
  </div>
  
  <div className="col-12">
    <button type="submit" className="btn btn-primary">login</button>
  </div>
  <i className="">Don't have an account yet? <Link className="text-primary" to="/blog/register">sign up</Link></i>

</form>
  );
}