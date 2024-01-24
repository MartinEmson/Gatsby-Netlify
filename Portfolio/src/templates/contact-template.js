import * as React from "react"
import { Link } from 'gatsby';
import Layout from "../components/layout";
import '../css/style.css';
import '../css/Contact.css';

const contactInfo = {
    email: 'martin@emsound.se',
    github: 'https://github.com/MartinEmson',
    linkedin: 'https://www.linkedin.com/in/martin-lindevall-65750a238/'
};

const ContactTemplate = () => {
    return (
        <Layout>
            <div className="contact-container">
                <h1 className="contact-header">Contact Me</h1>
                <a href={`mailto:${contactInfo.email}`} className="contact-link">{contactInfo.email}</a>
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link">GitHub Profile</a>
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn Profile</a>
            </div>
        </Layout>
    );
};

export default ContactTemplate;
