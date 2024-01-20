import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import HeroSection from "../components/HeroSection"
import Footer from "../components/Footer"
import "../css/style.css"


const IndexPage = ({ data }) => {
  const { title, presentationText, headerImage } = data.allContentfulHomepage.edges[0].node;

  console.log(data)

  return (
    <Layout>
      <HeroSection title={title} presentationText={presentationText} image={headerImage} />
      <div className="wrapper">
        <Link to="/portfolio">Se min portfolio</Link>
        <section className="projects">
        </section>
      </div>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulHomepage {
      edges {
        node {
          title
          presentationText
          headerImage {
            gatsbyImage(layout: FULL_WIDTH, width: 500)}
        }
      }
    }
  }
`;



export const Head = () => <title>Home Page</title>

export default IndexPage
