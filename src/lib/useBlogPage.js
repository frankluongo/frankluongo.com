import { graphql, useStaticQuery } from "gatsby";
import { objectifyNotionData } from "../helpers/objectifyNotionData";

export function useBlogPage() {
  const data = useStaticQuery(graphql`
    query BlogPageQuery {
      allNotion(
        filter: {
          properties: {
            published: { value: { eq: true } }
            space: { value: { name: { eq: "blog" } } }
          }
        }
      ) {
        nodes {
          title
          id
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
        }
      }
    }
  `);
  return objectifyNotionData(data.allNotion.nodes);
}
