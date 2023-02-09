import { graphql, useStaticQuery } from "gatsby";
import { formatSlice } from "../helpers/formatSlice";

export function useSlices(slice) {
  const data = useStaticQuery(graphql`
    query AllSlicesQuery {
      allNotion(
        filter: { properties: { type: { value: { name: { eq: "slice" } } } } }
      ) {
        slices: nodes {
          title
          properties {
            content {
              value
            }
            slug {
              value
            }
            order {
              value
            }
            space {
              value {
                name
              }
            }
            subspace {
              value {
                name
              }
            }
            URL {
              value
            }
          }
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);
  if (slice) return formatSlice(data)[slice];
  return formatSlice(data);
}
