const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for Contentful blog posts
  const blogPostResponse = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  // Create pages for blog posts
  blogPostResponse.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: path.resolve('./src/templates/portfolio-item.js'),
      context: {
        slug: edge.node.slug,
      },
    });
  });

  // Query for Contentful pages
  const pageResponse = await graphql(`
    query {
      allContentfulPage {
        edges {
          node {
            title
            presentationText
            slug
            description
            pageImage {
              gatsbyImageData(layout: FULL_WIDTH)
            }

            url
            template
          }
        }
      }
    }
  `);

  console.log("Page Response:", JSON.stringify(pageResponse.data, null, 2));

  // Create pages for each Contentful page
  pageResponse.data.allContentfulPage.edges.forEach(({ node }) => {
    let templatePath = '';
    // Determine the template path based on the 'template' field
    switch (node.template) {
      case 'about':
        templatePath = './src/templates/about-template.js';
        break;
      case 'home':
        templatePath = './src/templates/home-template.js';
        break;
      case 'contact':
        templatePath = './src/templates/contact-template.js'; // Path to your contact template
        break;
      case 'portfolio':
        templatePath = './src/templates/portfolio-template.js'; // Path to your portfolio template
        break;
      default:
        templatePath = './src/templates/default-template.js';
    }


    console.log(`Creating page with URL: ${node.url}, using template: ${templatePath}`);

    createPage({
      path: node.url, // Using 'url' field for the path
      component: path.resolve(templatePath),
      context: {
        slug: node.slug,
        title: node.title,
        description: node.description,
        pageImage: node.pageImage,
        body: node.body,
        url: node.url,
      },
    });
  });
};
