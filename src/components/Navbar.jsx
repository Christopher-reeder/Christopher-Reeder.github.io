import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="#1">
                <img src='??'></img>
            </a>
            <ul className='navbar-menu'>
                <li>Home</li>
                <li>Programing</li>
                <li>Drawing</li>
                <li>About</li>
            </ul>
        </nav>
    );
}