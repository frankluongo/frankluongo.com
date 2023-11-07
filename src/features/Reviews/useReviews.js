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
      jonEgg: file(relativePath: { eq: "jon-easter-egg.jpg" }) {
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

  const { alex, jon, jonEgg, kiraandsuzanna } = images;

  return [
    {
      author: "Alex Capozzolo",
      content: `We've been working with Frank for over +3 years and it's been great! He's helped us build 2 real estate websites that now generate all of our online leads. The helps he gave us with branding our company, logo, and website were top notch. If you want to stand out from your competition and have a memorable/professional online presence, he's your guy. He's extremely responsive whenever we need help with something.`,
      image: alex,
      source: "SD House Guys",
      sourceUrl: "https://sdhouseguys.com",
    },
    {
      author: "Jon Sanborn",
      content: `Easy to work with, always answers quickly, and solves issues on problems I don't even know exist.  We get countless praises on our website, branding, etc, all of which Frank played a huge role in. Highly recommend! `,
      image: jon,
      easterEgg: jonEgg,
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
