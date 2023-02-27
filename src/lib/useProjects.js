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
          childMarkdownRemark {
            html
          }
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
            projectTags {
              value {
                name
              }
            }
          }
          title
        }
      }
    }
  `);
  return parseNotionData(data.allNotion.nodes, [
    "childMarkdownRemark",
    "id",
    "title",
    "content",
    "slug",
    "thumbnailImage",
    "previewImage",
    "projectTags",
  ]);
}
