import { graphql, useStaticQuery } from "gatsby";
import { slugify } from "#utils/helpers";

const imageMap = new Map([
  ["Alicia Stepp Photography", "astepp"],
  ["Brotherly Love Real Estate", "blre"],
  ["M. Night Shyamalan Foundation", "mnsf"],
  ["Rent a Sim", "rentasim"],
  ["Tufas Boulder Lounge", "tufas"],
  ["Twin Waves Wellness Center", "twin"],
]);

export default function useHighlights() {
  const data = useStaticQuery(graphql`
    query {
      projects: allNotion(
        filter: { properties: { type: { value: { name: { eq: "project" } } } } }
      ) {
        nodes {
          title
          id
          properties {
            excerpt {
              value
            }
            slug {
              value
            }
          }
        }
      }
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

  return data.projects.nodes
    .map((node) => {
      return {
        description: node.properties.excerpt.value,
        image: data[imageMap.get(node.title)],
        slug: slugify(node.title),
        title: node.title,
        url: `//${node.properties.slug.value}/`,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}
