import { graphql, useStaticQuery } from "gatsby";

export default function useHighlights() {
  const data = useStaticQuery(graphql`
    query {
      astepp: file(relativePath: { eq: "project_alicia-stepp.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      blre: file(relativePath: { eq: "project_blre.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      mnsf: file(relativePath: { eq: "project_mnsfoundation.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      rentasim: file(relativePath: { eq: "project_rentasim.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      tufas: file(relativePath: { eq: "project_tufas-boulder-lounge.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      twin: file(relativePath: { eq: "project_twin-waves-wellness.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const { astepp, blre, mnsf, rentasim, tufas, twin } = data;

  return [
    {
      title: "Alicia Stepp Photography",
      slug: "alicia-stepp-photography",
      description:
        "The end result is a WordPress website using a handmade theme by yours truly. That theme uses webpack to compile sass and javascript.",
      image: astepp,
      url: "//aliciastepp.com/",
    },
    {
      title: "Brotherly Love Real Estate",
      slug: "brotherly-love-real-estate",
      description:
        "The founders of BLRE reached out to me to create their branding, bolster their online presence, and expand their reach in the Philadelphia area. We worked collaboratively to create a digital experience that would invite potential home sellers in, reassuring them every step of the way that they're in good hands.",
      image: blre,
      url: "//brotherlyloveproperties.com/",
    },
    {
      title: "M. Night Shyamalan Foundation",
      slug: "mnsfoundation",
      description: "title",
      image: mnsf,
      url: "//mnsfoundation.org/",
    },
    {
      title: "Rent a Sim",
      slug: "rent-a-sim",
      description:
        "Rent a Sim needed a fast, dynamic website to showcase their simulator rentals.",
      image: rentasim,
      url: "//rentasim.co/",
    },
    {
      title: "Tufas Boulder Lounge",
      slug: "tufas-boulder-lounge",
      description:
        "Tufas Boulder Lounge needed a full overhaul of their WordPress website. From design to SEO and performance, they were looking for something fresh, fast, and easy to maintain.",
      image: tufas,
      url: "//aliciastepp.com/",
    },
    {
      title: "Twin Waves Wellness",
      slug: "twin-waves-wellness",
      description:
        "tiThe founders of Twin Waves Wellness reached out to me to create their branding and digital presence. The two co-founders recently started a new chiropractic practice in San Diego and needed to get their name out there in a big way.tle",
      image: twin,
      url: "//twinwaveswellness.com/",
    },
  ];
}
