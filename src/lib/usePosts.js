import { graphql, useStaticQuery } from "gatsby";
import { parseNotionData } from "../helpers/parseNotionData";

export function usePosts() {
  const data = useStaticQuery(
    graphql`
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
            id
            title
            properties {
              slug {
                value
              }
            }
          }
        }
      }
    `
  );
  return parseNotionData(data.allNotion.nodes, ["id", "slug", "title"]);
}
