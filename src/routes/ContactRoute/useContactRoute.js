import { graphql, useStaticQuery } from "gatsby";

export default function useContactRoute() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "contact-background.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return data;
}
