import * as React from "react";
import { graphql } from "gatsby";

import { useMeta } from "#lib/useMeta";

import { mdToHTML } from "../helpers/mdToHTML";
import { objectifyNotionData } from "../helpers/objectifyNotionData";

import { Availability } from "../components/Availability";
import { Button } from "../components/Button";
import { Hero } from "../components/Hero";
import { Markup } from "../components/Markup";
import { Likes } from "../components/Likes";
import { Socials } from "../components/Socials";
import { Seo } from "../components/Seo";

const TITLE = "Contact Me";

const ContactPage = (props) => {
  const data = objectifyNotionData(props.data.allNotion.nodes);
  const { businessEmail } = useMeta();

  const __html = mdToHTML(data.heroHeadline.properties.content.value);

  return (
    <>
      <h1 data-a11y-hidden>{TITLE}</h1>
      <Hero
        path={data.heroImage.properties.imagePath.value}
        alt="Contact Page"
        extraStyles={{ heroContent: "color-white" }}
      >
        <h2 dangerouslySetInnerHTML={{ __html }} />
        <p>{data.heroSubheading.properties.content.value}</p>
        <Availability />
        <div>
          <Button href={`mailto:${businessEmail.title}`}>
            {businessEmail.title}
          </Button>
        </div>
      </Hero>
      <section className="container page-body grid gap:2 grid:cols-2">
        <div className="flex flex-direction:column gap:1">
          <h3>{data.aboutMeHeadline.properties.content.value}</h3>
          <Markup
            Tag="article"
            content={data.aboutMeText.childMarkdownRemark.html}
          />
        </div>
        <div className="flex flex-direction:column gap:1">
          <h3>{data.highlightsHeadline.properties.content.value}</h3>
          <Likes />
          <h3>Where to find me</h3>
          <Socials type="cards" />
        </div>
      </section>
    </>
  );
};

export const query = graphql`
  query ContactPageQuery {
    allNotion(
      filter: {
        properties: {
          published: { value: { eq: true } }
          space: { value: { name: { eq: "contact" } } }
        }
      }
    ) {
      nodes {
        properties {
          slug {
            value
          }
          content {
            value
          }
          imagePath {
            value
          }
        }
        title
        id
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default ContactPage;

export const Head = ({ data }) => {
  const page = objectifyNotionData(data.allNotion.nodes);
  return <Seo title={TITLE} description={page?.metaDescription} />;
};
