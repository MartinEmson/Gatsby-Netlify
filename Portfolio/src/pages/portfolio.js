import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
// import NavBar from '../components/NavBar';

import Layout from "../components/layout"
import "../css/style.css"
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
//config ej fullständig, leta efter detta på nätet
//config behövs för länkar, headings m.m.


const SecondPage = () => {
  const options = {
    // renderMark: {
    //   [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    // },
    // renderNode: {
    //   [INLINES.HYPERLINK]: (node, children) => {
    //     const { url } = node.data
    //     return (
    //       <a href { url } className="underline">
    //         {children}
    //       </a>
    //     )
    //   }
    // }

  }



  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioLandingPage {
        edges {
          node {
            id
            title
            heroImage {
              gatsbyImageData(
                width: 200
              )
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div className="wrapper">
        <h1 className="page-title">Hi from the second page</h1>
        <ul className="portfolio-list">
          {data.allContentfulPortfolioLandingPage.edges.map(edge => {
            const { id, title, heroImage } = edge.node;

            return (
              <li key={id} className="portfolio-item">
                <h2 className="portfolio-item-title">{title}</h2>
                {heroImage && heroImage.gatsbyImageData && (
                  <GatsbyImage
                    alt={title}
                    image={heroImage.gatsbyImageData}
                    className="portfolio-item-image"
                  />
                )}
              </li>
            )
          })}
        </ul>
        <p className="page-description">Welcome to page 2</p>
        <Link to="/" className="back-link">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default SecondPage
