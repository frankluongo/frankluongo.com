import { graphql, useStaticQuery } from "gatsby";
import { parseNotionData } from "../helpers/parseNotionData";

export function useProjects() {
  const data = useStaticQuery(graphql`
    query AllProjectsQuery {
      allNotion(
        filter: {
          properties: {
            published: { value: { eq: true } }
            type: { value: { name: { eq: "project" } } }
          }
        }
      ) {
        nodes {
          id
          properties {
            slug {
              value
            }
            content {
              value
            }
            thumbnailImage {
              value
            }
            previewImage {
              value
            }
          }
          title
        }
      }
    }
  `);
  return parseNotionData(data.allNotion.nodes, [
    "id",
    "title",
    "content",
    "slug",
    "thumbnailImage",
    "previewImage",
  ]);
}
