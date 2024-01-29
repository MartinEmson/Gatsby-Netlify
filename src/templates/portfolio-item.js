import React from "react"
import { Link, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../css/style.css"
import "../css/item.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      description
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, width: 700)
      }

    }
  }
`;

const portfolioItem = (props) => {
  const { title, heroImage, description } = props.data.contentfulBlogPost;

  return (
    <Layout>
      <div className="wrapper">
        <div className="content">
          <h1>{title}</h1>
          {/* Uncomment if using publishedDate */}
          {/* <span className="meta">
            Posted on {publishedDate}
          </span> */}

          {heroImage && (
            <GatsbyImage image={getImage(heroImage.gatsbyImageData)}
              alt={title} />
          )}

          <p>{description}</p>

          <Link to="/portfolio/">Visit the Blog Page</Link>
        </div>
      </div>
    </Layout>
  );
};

export default portfolioItem;
