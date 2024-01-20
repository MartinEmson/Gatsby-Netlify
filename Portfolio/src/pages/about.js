// import React from 'react';
// import { graphql, Link } from 'gatsby';
// import Layout from '../components/layout';
// import Footer from '../components/Footer';
// import '../css/style.css';

// const About = ({ data }) => {
//     const page = data.contentfulPage;

//     return (
//         <Layout>
//             <div className="wrapper">
//                 <main>
//                     <div className="wrapper">
//                         <div>
//                             <h2>{page.title}</h2>
//                             <p>{page.body.body}</p>
//                             <Link to="/work" className="button" aria-label="View my work">View My Work</Link>
//                         </div>

//                         {/* ... other sections ... */}

//                     </div>
//                 </main>
//                 <Link to="/" aria-label="Go back to the homepage">Go back to the homepage</Link>
//             </div>
//             <Footer />
//         </Layout>
//     );
// };

// export default About;

// export const query = graphql`
//   query AboutPageQuery {
//     contentfulPage(slug: { eq: "about" }) {
//       title
//       body {
//         body
//       }
//       pageImage {
//         file {
//           url
//         }
//       }
//     }
//   }
// `;
