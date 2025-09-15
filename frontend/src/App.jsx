import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import Project from './Component/Projects/Project';
import Blogs from './Component/Blogs/Blogs';
import Contact from './Component/Contact/Contact';
import Home from './Pages/Home/Home';
import Footer from './Component/Footer/Footer';


// import './App.css'


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div className='pt-16'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    
    </>
  )
}

export default App;
