import { graphql, useStaticQuery } from "gatsby";

export function useImages(path = false) {
  const data = useStaticQuery(
    graphql`
      query ImagesQuery {
        allFile {
          nodes {
            publicURL
            relativePath
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: AUTO)
              original {
                height
                width
              }
            }
          }
        }
      }
    `
  );
  const dataObj = {};
  data.allFile.nodes.forEach((node) => {
    dataObj[node.relativePath] = node;
  });
  if (path) return dataObj[path];
  return dataObj;
}
