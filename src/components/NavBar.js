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
            <ul className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
                {navigation.map(({ node }) => (
                    <li key={node.url}>
                        <Link to={`${node.url}`} activeClassName="active-link">
                            {node.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
