import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Experience from "./pages/experience/experience";
import './App.css'

export default function App() {

  return (
    <div className='app__container'>
      
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
    <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
    
      <BrowserRouter>

          
        <nav className='aside__nav'>
          <Nav />
        </nav>

        <aside className='aside__section'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </aside>  
      </BrowserRouter>
    </div>
  )
}
