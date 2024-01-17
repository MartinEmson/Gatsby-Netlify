import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import Layout from "./layout";
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text"


export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
    }
  }
`;

const BlogPost = (props) => {
  return (
    <Layout>
      <Link to="/portfolio/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        {/* <span className="meta">
          Posted on {props.data.contentfulBlogPost.publishedDate}
        </span> */}

        <GatsbyImage image={props.data.contentfulBlogPost.heroImage}
          alt={props.data.contentfulBlogPost.title}
        />



      </div>
    </Layout>
  );
};

export default BlogPost;
