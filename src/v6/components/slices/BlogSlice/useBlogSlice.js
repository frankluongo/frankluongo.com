import { graphql, useStaticQuery } from "gatsby";

export default function useBlog() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "blog-background.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return data;
}
