import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faCoffee , faUser,faSpinner} from '@fortawesome/free-solid-svg-icons';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password, password2 } = formData;

  const onFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
   
      register({ name, email, password });
    
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return(
<form onSubmit={e=>onSubmit(e)} className=" p-5 m-5 container-md">
     <h2 className="text-primary"> Sign Up</h2>
	 <p className="text-info"><FontAwesomeIcon className="text-dark" icon={faUser} /> create your account</p>
	 
	 <br/>
	 <div className=" row mb-3">
    <label for="inputEmail3" className="col-4 col-form-label">Name</label>
    <div className=" col-md-6 col-6">
      <input onChange={e=>onFormChange(e)} type="text" required name="name" value={name} class="form-control" id="inputEmail3" />
    </div>
	</div>

  <div className=" row mb-3">
    <label for="inputEmail3" className="col-4 col-form-label">Email</label>
    <div className=" col-md-6 col-6">
      <input onChange={onFormChange} type="email" required name="email" value={email} class="form-control" id="inputEmail3" />
    </div>
  </div>

  <div className="row mb-3">
    <label for="inputPassword3" className="col-4 col-form-label">Password</label>
    <div className="col-md-6 col-6">
      <input onChange={onFormChange} type="password" required name="password" value={password} class="form-control" id="inputPassword3" />
    </div>
  </div>
  
  
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign Up</button>
  </div>
  <i className="">Already have an account? <Link className="text-primary" to="/blog/login">sign in</Link></i>
</form>
	)
}
/* Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}; */

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { setAlert, register })(Register);