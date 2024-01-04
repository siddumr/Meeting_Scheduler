import React from 'react';
import './ContactUs.css'; // Make sure the CSS file name matches the component name
import Navbar from './Navbar';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div>
    <Navbar></Navbar>
    <div className="form-main">
      <div className="main-wrapper">
        <h2 className="form-head">Contact Form</h2>
        <form className="form-wrapper">
          <div className="form-card">
            <input
              className="form-input"
              type="text"
              name="full_name"
              required
            />
            <label className="form-label" htmlFor="full_name">Full Name</label>
          </div>

          <div className="form-card">
            <input
              className="form-input"
              type="email"
              name="email"
              required
            />
            <label className="form-label" htmlFor="email">Email</label>
          </div>

          <div className="form-card">
            <input
              className="form-input"
              type="number"
              name="phone_number"
              required
            />
            <label className="form-label" htmlFor="phone_number">Phone number</label>
          </div>

          <div className="form-card">
            <textarea
              className="form-textarea"
              maxLength="420"
              rows="3"
              name="address"
              required
            ></textarea>
            <label className="form-textarea-label" htmlFor="address">Address</label>
          </div>
          <div className="btn-wrap">
            <button>Submit</button>
          </div>
        </form>
        </div>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default ContactUs;
