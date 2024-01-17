// Footer.js
import React from 'react';
import { Link } from 'gatsby'; // Import Gatsby's Link component
import '../css/Footer.css'; // Import the CSS for styling

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <Link to="/">Home</Link> {/* Use Link for internal navigation */}
                <Link to="/about/">About</Link> {/* Include trailing slash for consistency */}
                <Link to="/contact/">Contact</Link> {/* Include trailing slash for consistency */}

            </div>
        </footer>
    );
};

export default Footer;
