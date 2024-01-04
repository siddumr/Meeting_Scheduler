import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import SignInForm from './components/SignInForm';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Navigator from './Router/Navigator';




// <div>
// <BrowserRouter>
// <Routes>
// <Route path='/' element={<SignInForm/>}/>
// <Route path='/signup' element={<Signup/>}/>
// <Route path='/Nav' element={<Navbar/>}></Route>
// <Route path='/Nav' element={<Home/>}></Route>
// </Routes>
// </BrowserRouter>
// </div>
function App() {
  return (
    <div>
    <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    </div>
  );
}

export default App;
