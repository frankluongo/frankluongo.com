import { graphql, useStaticQuery } from "gatsby";

export function useHome() {
  const data = useStaticQuery(
    graphql`
      query HomepageData {
        allNotion(
          filter: {
            properties: {
              space: { value: { name: { eq: "home" } } }
              published: { value: { eq: true } }
            }
          }
        ) {
          nodes {
            title
            properties {
              slug {
                value
              }
              content {
                value
              }
            }
            id
            json
          }
        }
      }
    `
  );
  return data.allNotion.nodes;
}
