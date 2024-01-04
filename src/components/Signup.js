import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
//import './Signup.css';
const Signup = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
    };
    
    return (
      <div>
      <Navbar></Navbar>
        <div className='background'>
        <div className="container1">
        <img src='logo.png' alt='logo' className='img'/>
        <div className="heading1"><marquee>Virtual Visa - SignUp</marquee></div>
        <form onSubmit={handleSubmit} className="form1">
        <input required className="input" type="text" name="email" id="email" placeholder="Username" />
        <input required className="input" type="email" name="email" id="email" placeholder="E-mail" />
        <input required className="input" type="password" name="password" id="password" placeholder="Create Password" />
        <input required className="input" type="password" name="password" id="password" placeholder="Confirm Password" />
        <Link to="./Home"><input className="login-button" type="submit" value="SignUp" /></Link>
        </form>
      
      
             

        
            

        



          <p >Already have an Account?</p>
          <span className="agreement">
          <Link to="/Login">Login</Link>
        </span>
          </div>
          </div>
          </div>
  );
};

export default Signup;
