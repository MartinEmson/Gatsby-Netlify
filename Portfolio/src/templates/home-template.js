import * as React from "react"
import { Link } from 'gatsby';
import HeroSection from '../components/HeroSection';
import Layout from "../components/layout";
import '../css/style.css';
import '../css/HeroSection.css'

const HomeTemplate = ({ pageContext }) => {
    const { title, pageImage } = pageContext;
    return (
        <Layout>
            <HeroSection
                title={title}
                pageImage={pageImage}
            />            <div className="wrapper">
                <Link to="/portfolio">Se min portfolio</Link>
                <section className="projects">
                    {/* Additional content here */}
                </section>
            </div>
        </Layout>
    );
}

export default HomeTemplate;
