// src/components/NavBar.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import '../css/Navbar.css'
import React from 'react';
import { Link } from 'gatsby';

const NavBar = () => {
    return (
        <nav>
            <a id="myLink" href="/">Emson.dev</a>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
