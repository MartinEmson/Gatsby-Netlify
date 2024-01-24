import React from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from "../components/layout";
import "../css/style.css";


const PortfolioTemplate = ({ pageContext }) => {
    const { portfolioItems } = pageContext; // Assuming portfolioItems is an array of items

    return (
        <Layout>
            <div className="wrapper">
                <h1 className="page-title">Hi from the Portfolio Page</h1>
                <ul className="portfolio-list">
                    {portfolioItems.map(({ id, title, pageImage }) => {
                        const image = getImage(pageImage);
                        return (
                            <li key={id} className="portfolio-item">
                                <h2 className="portfolio-item-title">{title}</h2>
                                {image && (
                                    <GatsbyImage
                                        alt={title}
                                        image={image}
                                        className="portfolio-item-image"
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>
                <p className="page-description">Welcome to the portfolio page</p>
                {/* Back link, if needed */}
            </div>
        </Layout>
    );
};

export default PortfolioTemplate;
