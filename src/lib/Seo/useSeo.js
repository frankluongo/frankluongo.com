import { graphql, useStaticQuery } from "gatsby";
import { objectifyNotionData } from "#utils/notion";

export default function useSeo() {
  const data = useStaticQuery(graphql`
    query {
      allNotion(
        filter: { properties: { type: { value: { name: { eq: "meta" } } } } }
      ) {
        nodes {
          properties {
            slug {
              value
            }
            excerpt {
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
