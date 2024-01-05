import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';



export default function Navbar() {
  return (
    <div className='navbar-container'>

      <div className='logo'>
        <img src='logo.png' ></img>
        
        <h3 className='head'> VirtualVisa</h3>
       
      </div>

      <div className='list-items'>
        <ul className='unordered-list'>
          
          <Link to="/Home"><li>HOME</li></Link>
            <Link to="/signup"><li>
            SIGN UP
            </li></Link>
         
       
            <Link to="/Login"><li>LOGIN</li></Link>
          
          
            <Link to="/Aboutus"><li>ABOUT US</li></Link>
          
          
            <Link to="/contact"><li>CONTACT US</li></Link>
          
        </ul>
      </div>

    </div>
  )
}