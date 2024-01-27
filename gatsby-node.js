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
            title
            heroImage {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  // Error handling for the GraphQL query
  if (blogPostResponse.errors) {
    console.error("Error retrieving contentful blog posts", blogPostResponse.errors);
    throw new Error(blogPostResponse.errors);
  }

  // Create an array of portfolio items
  const portfolioItems = blogPostResponse.data.allContentfulBlogPost.edges.map(edge => ({
    slug: edge.node.slug,
    title: edge.node.title,
    heroImage: edge.node.heroImage.gatsbyImageData,
  }));

  console.log("Portfolio Items:", portfolioItems);

  // Create pages for blog posts (portfolio items)
  blogPostResponse.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: path.resolve('./src/templates/portfolio-item.js'),
      context: {
        slug: edge.node.slug,
        portfolioItems,
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
          aboutMe
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

  // Error handling for the GraphQL query
  if (pageResponse.errors) {
    console.error("Error retrieving contentful pages", pageResponse.errors);
    throw new Error(pageResponse.errors);
  }

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
        templatePath = './src/templates/contact-template.js';
        break;
      case 'portfolio':
        templatePath = './src/templates/portfolio-template.js';
        break;
      default:
        templatePath = './src/templates/default-template.js';
    }

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
        aboutMe: node.aboutMe,
        portfolioItems,
      },
    });
  });
};
