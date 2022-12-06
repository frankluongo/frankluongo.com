import { graphql, useStaticQuery } from "gatsby";
import { objectifyNotionData } from "../helpers/objectifyNotionData";

export function useProjectsPage() {
  const data = useStaticQuery(graphql`
    query ProjectsPageQuery {
      allNotion(
        filter: {
          properties: {
            published: { value: { eq: true } }
            space: { value: { name: { eq: "projectsPage" } } }
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
          }
          title
          id
        }
      }
    }
  `);
  return objectifyNotionData(data.allNotion.nodes);
}
