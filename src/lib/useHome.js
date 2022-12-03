import { graphql, useStaticQuery } from "gatsby";
import { objectifyNotionData } from "../helpers/objectifyNotionData";

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
            properties {
              slug {
                value
              }
              content {
                value
              }
              imagePath {
                value
              }
              type {
                value {
                  name
                }
              }
            }
            id
            title
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `
  );
  return objectifyNotionData(data.allNotion.nodes);
}
