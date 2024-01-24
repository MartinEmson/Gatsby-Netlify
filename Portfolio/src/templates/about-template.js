import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout";
import '../css/style.css';

const AboutTemplate = ({ title, body }) => {
    return (
        <Layout>
            <main>
                <div className="wrapper">
                    <div>
                        <h2>{title}</h2>
                        <p>{body}</p>
                        <Link to="/portfolio" className="button" aria-label="View my work">View My Work</Link>
                    </div>

                    {/* ... other sections ... */}

                    <Link to="/" aria-label="Go back to the homepage">Go back to the homepage</Link>
                </div>
            </main>
        </Layout>
    );
};

export default AboutTemplate;
