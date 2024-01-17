import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import '../css/HeroSection.css';

const HeroSection = ({ title, presentationText, headerImage }) => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <div className="hero-image">
                    {headerImage && headerImage.gatsbyImageData && (
                        <GatsbyImage
                            alt={title}
                            image={headerImage.gatsbyImageData}

                        />
                    )}
                </div>
                <div className="hero-text">
                    {title && <h1>{title}</h1>}
                    {presentationText && <p>{presentationText}</p>}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
