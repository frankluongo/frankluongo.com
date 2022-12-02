import { graphql, useStaticQuery } from "gatsby";
import { parseNotionData } from "../helpers/parseNotionData";

export function useSocials() {
  const data = useStaticQuery(
    graphql`
      query SocialsQuery {
        allNotion(
          filter: {
            properties: {
              space: { value: { name: { eq: "social" } } }
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
              URL {
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
    "URL",
    "id",
  ]);
}
