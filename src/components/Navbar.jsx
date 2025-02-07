import React from "react";
import "./Navbar.css";
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const goToHome= () => {
      navigate('/');
    };
    
    const goToAbout = () => {
      navigate('/about');
    };
  
    const goToProgramming = () => {
      navigate('/Programming');
    };
  
    const goToDrawing = () => {
      navigate('/Drawing');
    };
    return (
        <nav className="navbar">
            <a href="#1">
                <img src='/images/logo.png' onClick={goToHome} className='navbar-logo' alt="logo"></img>
            </a>
            <ul className='navbar-menu'>
                <li onClick={goToHome} className={location.pathname === '/' ? 'active' : ''}>Home</li>
                <li onClick={goToProgramming} className={location.pathname === '/Programming' ? 'active' : ''}>Programming</li>
                <li onClick={goToDrawing} className={location.pathname === '/Drawing' ? 'active' : ''}>Drawing</li>
                <li onClick={goToAbout} className={location.pathname === '/about' ? 'active' : ''}>About</li>
            </ul>
        </nav>
    );
}