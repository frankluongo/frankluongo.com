import { graphql, useStaticQuery } from "gatsby";
import { parseNotionData } from "#utils/notion";

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
              excerpt {
                value
              }
              tags {
                value {
                  name
                }
              }
            }
          }
        }
      }
    `
  );
  return parseNotionData(data.allNotion.nodes, [
    "excerpt",
    "id",
    "slug",
    "tags",
    "title",
  ]);
}
