import React from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";
import Layout from "../components/layout";
import "../css/style.css";

const PortfolioTemplate = ({ pageContext }) => {
    console.log(pageContext);
    const { portfolioItems } = pageContext;

    console.log('Received Portfolio Items:', portfolioItems);
    if (!portfolioItems || portfolioItems.length === 0) {
        return <p>No portfolio items found.</p>;
    }

    return (
        <Layout>
            <div className="wrapper">
                <ul className="portfolio-list">
                    {portfolioItems.map(({ slug, title, heroImage }) => {
                        const image = getImage(heroImage);
                        return (
                            <li key={slug} className="portfolio-item">
                                <h2 className="portfolio-item-title">{title}</h2>
                                {image && (
                                    <Link to={`/portfolio/${slug}`}>
                                        <GatsbyImage
                                            alt={title}
                                            image={image}
                                            className="portfolio-item-image"
                                        />
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
                <p className="page-description">Welcome to the portfolio page</p>
            </div>
        </Layout>
    );
};

export default PortfolioTemplate;
