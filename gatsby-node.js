const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query AllPostsQuery {
      allNotion(
        filter: {
          properties: {
            published: { value: { eq: true } }
            type: { value: { name: { eq: "post" } } }
          }
        }
      ) {
        nodes {
          title
          properties {
            slug {
              value
            }
          }
          id
        }
      }
    }
  `);

  const component = path.resolve(`src/templates/post.js`);
  queryResults.data.allNotion.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.properties.slug.value}`,
      component,
      context: {
        id: node.id,
      },
    });
  });
};
