import { graphql, useStaticQuery } from "gatsby";

export default function useProjectsSlice() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "projects-background.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return data;
}
