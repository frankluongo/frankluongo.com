import * as React from "react";
import { graphql } from "gatsby";

import { useMeta } from "#lib/useMeta";

import { mdToHTML } from "../helpers/mdToHTML";
import { objectifyNotionData } from "../helpers/objectifyNotionData";

import { Availability } from "#features/Availability";
import { Button } from "#common/Button";
import { Hero } from "#common/Hero";
import { Markup } from "#common/Markup";
import { Likes } from "#features/Likes";
import { Socials } from "#features/Socials";
import { Seo } from "#common/Seo";

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
        extraStyles={{ heroContent: "color:white grid grid:12 gap" }}
      >
        <div className="col:12 md:col:9 flex col gap:1">
          <div className="flex col gap:0.5">
            <h1 dangerouslySetInnerHTML={{ __html }} />
            <p className="large color:gray-1">
              {data.heroSubheading.properties.content.value}
            </p>
            <Availability />
          </div>
          <div>
            <Button href={`mailto:${businessEmail.title}`}>
              {businessEmail.title}
            </Button>
          </div>
        </div>
      </Hero>
      <section className="container page-body grid gap:2 grid:cols-2">
        <div className="flex col gap:1">
          <h3>{data.aboutMeHeadline.properties.content.value}</h3>
          <Markup
            Tag="article"
            content={data.aboutMeText.childMarkdownRemark.html}
          />
        </div>
        <div className="flex col gap:1">
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
