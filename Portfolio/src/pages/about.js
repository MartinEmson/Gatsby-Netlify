import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'; // Import your layout component
import Footer from '../components/Footer'; // Import your Footer component
import '../css/style.css';

const about = () => {
    return (
        <Layout>
            <div className="wrapper">
                <main>
                    <div className="wrapper">
                        <div>
                            <h2>Hello, I'm Martin!</h2>
                            <p>I'm a front end student based in Stockholm. Welcome to my portfolio!</p>
                            <button>View My Work</button>
                        </div>

                        <section className="skillsSection">
                            <h2>My skills</h2>
                            <ul className="skills">
                                <li>HTML 5</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Wordpress</li>
                                <li>HTML 5</li>
                                <li>HTML 5</li>
                                <li>HTML 5</li>
                                <li>HTML 5</li>
                                <li>HTML 5</li>
                            </ul>
                        </section>
                    </div>
                </main>
                <Link to="/">Go back to the homepage</Link> {/* Link to the homepage */}
            </div>
            <Footer /> {/* Include the Footer component */}
        </Layout>
    );
};

export default about;
