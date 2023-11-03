import { graphql, useStaticQuery } from "gatsby";

export default function useProjects() {
  const images = useStaticQuery(graphql`
    query {
      aliciaSteppImage: file(relativePath: { eq: "alicia-stepp.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: AUTO)
          original {
            height
            width
          }
        }
      }
      blreImage: file(relativePath: { eq: "blre.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: AUTO)
          original {
            height
            width
          }
        }
      }
      mnsfImage: file(relativePath: { eq: "mnsf.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: AUTO)
          original {
            height
            width
          }
        }
      }
    }
  `);
  const { aliciaSteppImage, blreImage, mnsfImage } = images;
  const projects = [
    {
      title: "Alicia Stepp",
      url: "/projects#alicia-stepp-photography",
      image: aliciaSteppImage,
    },
    {
      title: "Brotherly Love Real Estate",
      url: "/projects#brotherly-love-real-estate",
      image: blreImage,
    },
    {
      title: "M. Night Shyamalan Foundation",
      url: "/projects#mnsfoundation",
      image: mnsfImage,
    },
  ];
  return projects;
}
