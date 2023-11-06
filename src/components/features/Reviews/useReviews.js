import { graphql, useStaticQuery } from "gatsby";

export default function useReviews() {
  const images = useStaticQuery(graphql`
    query {
      alex: file(relativePath: { eq: "alex-capozzolo.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: AUTO)
          original {
            height
            width
          }
        }
      }
      jon: file(relativePath: { eq: "jon-sanborn.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: AUTO)
          original {
            height
            width
          }
        }
      }
      kiraandsuzanna: file(relativePath: { eq: "kira-and-suzanna.jpg" }) {
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

  const { alex, jon, kiraandsuzanna } = images;

  return [
    {
      author: "Alex Capozzolo",
      content: `Working with Frank was a game-changer for our business! Their keen eye for aesthetics and intuitive understanding of user experience resulted in a website that not only looks stunning but also functions seamlessly.
      Thank you, Frank, for turning our vision into a visually captivating reality!`,
      image: alex,
      source: "SD House Guys",
      sourceUrl: "https://sdhouseguys.com",
    },
    {
      author: "Jon Sanborn",
      content: `Working with Frank was a game-changer for our business! Their keen eye for aesthetics and intuitive understanding of user experience resulted in a website that not only looks stunning but also functions seamlessly.
      Thank you, Frank, for turning our vision into a visually captivating reality!`,
      image: jon,
      source: "Brotherly Love Real Estate",
      sourceUrl: "https://brotherlyloveproperties.com",
    },
    {
      author: "Kira and Suzanna",
      content: `Working with Frank has been a LIFE SAVOR!! Being a small business, it is crucial that our website is not only professional, but user friendly and reflects the personality of the business. We've gotten countless feedback from clients on how our website was what got them to pick us over others in the industry! Frank is not only great at what he does - he is a joy to work with and is ALWAYS on top of it! We know we can rely on Frank to show up and help us with our online presence. We can't recommend him enough!`,
      image: kiraandsuzanna,
      source: "Twin Waves Wellness Center",
      sourceUrl: "https://twinwaveswelnness.com",
    },
  ];
}
