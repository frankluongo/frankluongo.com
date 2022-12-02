import { graphql, useStaticQuery } from "gatsby";
import { parseNotionData } from "../helpers/parseNotionData";

export function useNav() {
  const data = useStaticQuery(
    graphql`
      query NavLinksQuery {
        allNotion(
          filter: {
            properties: {
              space: { value: { name: { eq: "nav" } } }
              published: { value: { eq: true } }
            }
          }
          sort: { properties: { order: { value: ASC } } }
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
              titleMobile {
                value
              }
            }
            id
          }
        }
      }
    `
  );
  return parseNotionData(data.allNotion.nodes, [
    "title",
    "slug",
    "content",
    "titleMobile",
    "id",
  ]);
}
