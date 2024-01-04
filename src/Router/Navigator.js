import React from 'react'
import { Route, Routes } from 'react-router'
import SignInForm from '../components/SignInForm'
import Home from '../components/Home'
import Signup from '../components/Signup'
import Aboutus from '../components/Aboutus'
import ContactUs from '../components/ContactUs'
export default function Navigator() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/Login' element = {<SignInForm />}></Route>
        <Route path='/signup' element = {<Signup />}></Route>
        <Route path='/Home' element = {<Home />}></Route>
        <Route path='/Aboutus' element={<Aboutus />}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        
      </Routes>
    </div>
  )
}