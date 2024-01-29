import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import '../css/style.css'
import '../css/Contact.css'

const ContactTemplate = () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulLink {
                email
                emailIcon {
                    file {
                        url
                    }
                }
                github
                githubIcon {
                    file {
                        url
                    }
                }
                linkedin
                linkedinIcon {
                    file {
                        url
                    }
                }
            }
        }
    `);

    const { email, emailIcon, github, githubIcon, linkedin, linkedinIcon } = data.contentfulLink;

    return (
        <Layout>
            <div className="contact-container">
                <h1 className="contact-header">Contact Me</h1>
                <a href={`mailto:${email}`} className="contact-link">
                    {/* <img src={emailIcon.file.url} alt="Email" /> */}
                    {email}
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer" className="contact-link">
                    {/* <img src={githubIcon.file.url} alt="GitHub" /> */}
                    GitHub Profile
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                    {/* <img src={linkedinIcon.file.url} alt="LinkedIn" /> */}
                    LinkedIn Profile
                </a>
            </div>
        </Layout>
    );
};

export default ContactTemplate;
