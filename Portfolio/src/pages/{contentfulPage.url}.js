import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import HomeTemplate from "../templates/home-template";
import AboutTemplate from "../templates/about-template";

export const query = graphql`
    query pageQuery($id: String) {
        contentfulPage(id: {eq: $id}) {
            title
            description
            pageImage {
              gatsbyImage(layout: FULL_WIDTH, width: 500)
            }
            template
        }
    }
`;

const Page = ({ data }) => {
    const { contentfulPage } = data;

    if (!contentfulPage) {
        return <Layout>Loading...</Layout>; // or handle the error as you see fit
    }

    const getTemplate = () => {
        switch (contentfulPage.template) {
            case 'about':
                return <AboutTemplate {...contentfulPage} />;
            default:
                return <HomeTemplate {...contentfulPage} />;
        }
    };

    return <Layout>{getTemplate()}</Layout>;
};

export default Page;
