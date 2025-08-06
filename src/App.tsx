import React from 'react';
import EnhancedPortfolio from './demo.tsx'
import Navbar from './components/NavBar.tsx';
// import NavBar2 from './components/NavBar2.tsx';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Project from './pages/Projects.tsx';
import About from './pages/About.tsx';
import { ContentUs } from './pages/ContactUs.tsx';
import Footer from './components/Footer.tsx';
const App: React.FC = () => {

  return (
    <div>
    <Navbar/>
    {/* <NavBar2/> */}
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Project/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<ContentUs/>} />
      <Route path='/portfolio' element={<EnhancedPortfolio/>}/>
      </Routes>
      <Footer />


    </div>
  );
};

export default App;