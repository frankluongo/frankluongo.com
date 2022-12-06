import { graphql, useStaticQuery } from "gatsby";
import { objectifyNotionData } from "../helpers/objectifyNotionData";

export function useContactPage() {
  const data = useStaticQuery(graphql`
    query ContactPageQuery {
      allNotion(
        filter: {
          properties: {
            published: { value: { eq: true } }
            space: { value: { name: { eq: "contact" } } }
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
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);

  return objectifyNotionData(data.allNotion.nodes);
}
