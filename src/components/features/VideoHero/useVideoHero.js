import { graphql, useStaticQuery } from "gatsby";

export default function useVideoHero() {
  const data = useStaticQuery(graphql`
    query {
      video: file(relativePath: { eq: "video-bg.mp4" }) {
        publicURL
      }
      fallback: file(relativePath: { eq: "hero-bg-fallback.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return data;
}
