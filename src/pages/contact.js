import * as React from "react";
import { graphql } from "gatsby";

import { useMeta } from "#lib/useMeta";

import { mdToHTML } from "#helpers/mdToHTML";
import { objectifyNotionData } from "#helpers/objectifyNotionData";
import { stripMarkdown } from "#helpers/stripMarkdown";

import { Button } from "#base/Button/Button";
import { Hero } from "#base/Hero/Hero";
import { Markup } from "#base/Markup/Markup";
import { SectionHeader } from "#base/SectionHeader/SectionHeader";
import { Seo } from "#base/Seo";

import { Availability } from "#features/Availability/Availability";
import { Likes } from "#features/Likes/Likes";
import { Socials } from "#features/Socials/Socials";

const ContactPage = (props) => {
  const data = objectifyNotionData(props.data.allNotion.nodes);
  const { businessEmail } = useMeta();

  const __html = mdToHTML(data.heroHeadline.properties.content.value);

  return (
    <>
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
      <SectionHeader headerStyle="blue">
        {data.aboutMeHeadline.properties.content.value}
      </SectionHeader>
      <section className="container page-body grid gap:2 grid:cols-2">
        <div className="flex col gap:1">
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
  const dynamicTitle = stripMarkdown(
    page?.heroHeadline?.properties?.content?.value
  );
  return (
    <Seo
      title={dynamicTitle || "Contact me"}
      description={page?.metaDescription}
    />
  );
};
