// src/components/NavBar.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css'
import React from 'react';
import { Link } from 'gatsby';
import useNavigation from '../hooks/use-navigation';
import { useState } from 'react';


const NavBar = () => {
    const navigation = useNavigation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <a id="myLink" href="/">Emson.dev</a>
            <button onClick={toggleMenu} className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
                <button onClick={toggleMenu} className="close-btn">X</button>
                <ul>
                    {navigation.map(({ node }) => (
                        <li key={node.url}>
                            <Link to={`${node.url}`} activeClassName="active-link">
                                {node.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>

    );
};

export default NavBar;
