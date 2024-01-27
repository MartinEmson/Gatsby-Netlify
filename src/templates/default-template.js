import * as React from "react"
import { Link } from 'gatsby';
import Layout from "../components/layout";
import '../css/style.css';

const HomeTemplate = ({ title, body }) => {
    return (
        <Layout>
            <main>
                <div className="wrapper">
                    <div>
                        <h2>Hedj</h2>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default HomeTemplate;
