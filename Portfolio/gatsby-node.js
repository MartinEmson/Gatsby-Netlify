// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const response = await graphql(`
    query {
      allContentfulBlogPost{
        edges {
          node {
            slug
          }
        }
      }
    }
  `);


  response.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: path.resolve('./src/templates/portfolio-item.js'),
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
