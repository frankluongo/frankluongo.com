import * as React from "react";
import { graphql } from "gatsby";

import { useMeta } from "#lib/useMeta";

import { objectifyNotionData } from "#helpers/objectifyNotionData";
import { stripMarkdown } from "#helpers/stripMarkdown";

import { Button } from "#base/Button/Button";
import { Hero } from "#base/Hero/Hero";
import { SectionHeader } from "#base/SectionHeader/SectionHeader";
import { Seo } from "#base/Seo";

import { Availability } from "#features/Availability/Availability";
import { PostsPreview } from "#features/PostsPreview/PostsPreview";

const BlogPage = (props) => {
  const data = objectifyNotionData(props.data.allNotion.nodes);
  const { businessEmail } = useMeta();

  return (
    <>
      <Hero
        path={data.heroImage.properties.imagePath.value}
        alt="Blog Page"
        extraStyles={{ heroContent: "color:white grid grid:12 gap" }}
      >
        <div className="col:12 md:col:9 flex col gap:1">
          <div className="flex col gap:0.5">
            <h1>{data.heroHeadline.properties.content.value}</h1>
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
      <SectionHeader headerStyle="blue">Articles &amp; Whatnot</SectionHeader>
      <section className="container page-body flex col gap:2">
        <PostsPreview />
      </section>
    </>
  );
};

export const query = graphql`
  query BlogPageQuery {
    allNotion(
      filter: {
        properties: {
          published: { value: { eq: true } }
          space: { value: { name: { eq: "blog" } } }
        }
      }
    ) {
      nodes {
        title
        id
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
      }
    }
  }
`;

export default BlogPage;

export const Head = ({ data }) => {
  const page = objectifyNotionData(data.allNotion.nodes);
  const dynamicTitle = stripMarkdown(
    page?.heroHeadline?.properties?.content?.value
  );
  return (
    <Seo
      title={dynamicTitle || "My blog"}
      description={page?.metaDescription}
    />
  );
};
