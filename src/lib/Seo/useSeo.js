import { graphql, useStaticQuery } from "gatsby";
import { objectifyNotionData } from "#utils/notion";

export default function useSeo() {
  const data = useStaticQuery(graphql`
    query MetaDataQuery {
      allNotion(
        filter: {
          properties: {
            space: { value: { name: { eq: "meta" } } }
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
          }
          title
        }
      }
    }
  `);
  return objectifyNotionData(data.allNotion.nodes);
}
