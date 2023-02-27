const path = require("path");

const POSTS = "posts";

const postsObj = {
  [POSTS]: {
    component: path.resolve("src/templates/post.js"),
    dir: "/blog/",
  },
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const doQuery = async (query) => await graphql(query);

  const queries = [doQuery(makeQuery(POSTS, "post"))];

  const [{ data: postsData }] = await Promise.all(queries);

  postsData[POSTS].nodes.forEach((node) => {
    const { component, dir } = postsObj[POSTS];
    const slug = node.properties.slug.value;
    createPage({
      path: `${dir}${slug}`,
      component,
      context: { id: node.id, title: node.title },
    });
  });
};

function makeQuery(name, type) {
  return `
    query {
      ${name}: allNotion(
        filter: {
          properties: {
            published: { value: { eq: true } }
            type: { value: { name: { eq: "${type}" } } }
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
  `;
}
