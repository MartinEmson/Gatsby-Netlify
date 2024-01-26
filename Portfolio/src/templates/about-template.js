import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from "../components/layout";
import '../css/style.css';
import '../css/about.css'


const AboutTemplate = ({ pageContext }) => {
    const { title, presentationText, aboutMe, pageImage } = pageContext;
    const image = getImage(pageImage);


    return (
        <Layout>
            <main>
                <div className="wrapper about-page">
                    <div className="about-content">
                        <h2>{title}</h2>
                        <p className="presentation">{presentationText}</p>
                        {image && (
                            <GatsbyImage
                                alt={title}
                                image={image}
                            />
                        )}
                        <p className="body">{aboutMe}</p>
                        <Link to="/portfolio" className="button" aria-label="View my work">
                            View My Work
                        </Link>
                    </div>

                    {/* ... other sections ... */}

                    {/* <Link to="/" aria-label="Go back to the homepage">
                        Go back to the homepage
                    </Link> */}
                </div>
            </main>
        </Layout>
    );
};

export default AboutTemplate;
