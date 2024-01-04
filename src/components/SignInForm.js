import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
// import './Signin.css';

const SignInForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Form submission logic (replace with your actual logic)
    console.log('Submitting Form:', formData);

    // Clear form data after successful submission
    setFormData({ email: '', password: '' });
    setErrors({ email: '', password: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
    <Navbar></Navbar>
    <div className="background">
    <div className="container1">
      <img src="logo.png" alt="logo" className="img" />

      <div className="heading1">
        <marquee>Virtual Visa - Login </marquee>
      </div>
      <form onSubmit={handleSubmit} className="form1">
        <input
          required
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <input
          required
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
        <span className="forgot-password">
          <a href="#">Forgot Password ?</a>
        </span>
        <Link to="/Home">
        <input className="login-button" type="submit" value="Login" /></Link>
      </form>
      <div className="social-account-container">
        <span className="title">Or Sign in with</span>
        <div className="social-accounts">
        <button className="social-button google">
        <a href="https://google.com/" target="_blank" rel="noopener noreferrer">
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
      </svg></a>
      
          </button>
          <button className="social-button apple">
          <a href="https://apple.com/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" class="bi bi-apple" viewBox="0 0 16 16"><path fill="#FFFFFF" d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
</svg></a>
            </button>
          <button className="social-button twitter">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
  <path fill="#FFFFFF" d="M512 109.384c-18.84 8.35-39.08 14.005-60.27 16.54 21.63-13 38.25-33.6 46-58.14-20.205 12.07-42.8 20.74-66.75 25.48-19.13-20.42-46.46-33.17-76.67-33.17-58 0-104.84 47.29-104.84 105.58 0 8.3 0.92 16.36 2.68 24.14-87.2-4.38-164.3-46.06-216.08-109.7-9.06 15.46-14.26 33.5-14.26 52.7 0 36.48 18.55 68.61 46.73 87.55-17.22-0.54-33.45-5.3-47.7-13.17v1.32c0 50.94 36.16 93.36 84 103-8.8 2.4-18.1 3.7-27.7 3.7-6.78 0-13.34-0.66-19.81-1.88 13.36 41.73 52.05 72.2 98.04 73.2-35.92 28.1-81.32 44.9-130.4 44.9-8.45 0-16.75-0.5-25.04-1.48 46.54 29.86 101.74 47.22 161.08 47.22 193.28 0 298.92-159.93 298.92-298.92 0-4.56-0.1-9.12-0.28-13.67 20.54-14.78 38.38-33.22 52.49-54.34z"/>
</svg></a>
          </button>
          </div>
          </div>
          <p >Don't have an Account?</p>
          <span className="agreement">
          <Link to="/signup">Sign Up here</Link>
        </span>
          </div>
          </div>
          </div>
  );
};

export default SignInForm;
