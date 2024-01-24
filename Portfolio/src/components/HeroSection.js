import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import '../css/HeroSection.css';

const HeroSection = ({ title, presentationText, pageImage }) => {
    // Ensure the image data is in the correct format for GatsbyImage
    const image = getImage(pageImage);

    return (
        <div className="hero-section">
            <div className="hero-content">
                <div className="hero-image">
                    {image && (
                        <GatsbyImage
                            alt={title}
                            image={image}
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
