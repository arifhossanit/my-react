import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Services from './Services';

export default function RouteApp() {
  return (
    
    <Router>
        <Navbar/>
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/services' element={<Services/>}/>

            <Route Component={NotFound}/>
        </Routes> 
        
    </Router>
  )
}
