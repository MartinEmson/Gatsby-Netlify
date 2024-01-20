import React from "react"
import { Link, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import "../css/style.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      heroImage{
        gatsbyImage(width: 700)
      }
    }
  }
`;

const portfolioItem = (props) => {
  console.log(props); // Add this line to log the props

  return (
    <Layout>
      <div className="wrapper">
        <div className="content">
          <h1>{props.data.contentfulBlogPost.title}</h1>
          {/* <span className="meta">
          Posted on {props.data.contentfulBlogPost.publishedDate}
        </span> */}

          <GatsbyImage image={props.data.contentfulBlogPost.heroImage}
            alt={props.data.contentfulBlogPost.title} />

          {/* <p>{renderRichText(props.data.contentfulBlogPost.richtext)}</p> */}
          <Link to="/portfolio/">Visit the Blog Page</Link>

        </div>
      </div>
    </Layout>
  );

};

export default portfolioItem;
