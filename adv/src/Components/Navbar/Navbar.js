import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import './Navbar.css';
import navbarLogo from './Advenient-Logo 3.png';
export default class Navbar extends Component {
    
  render() {
    return (
        <header>
            <img class="logo" src={navbarLogo} alt="logo"/>
            <nav> 
            <ul className="links">
                <li><NavLink to="/" className={"is-active"}>Home</NavLink></li>
                <li><NavLink to="/about" className={"is-active"}> About </NavLink></li>
                <li><NavLink to="/services" className={"is-active"}> Services </NavLink></li>
                <li><NavLink to="/contact" className={"is-active"}> Contact Us </NavLink></li>
            </ul>
            </nav>
        </header>
        
    )
  }
}