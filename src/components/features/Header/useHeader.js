import { graphql, useStaticQuery } from "gatsby";

export default function useHeader() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          links {
            url
            name
          }
        }
      }
    }
  `);
  return data?.site?.siteMetadata?.links ?? [];
}
