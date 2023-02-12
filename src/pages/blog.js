import * as React from "react";
import { graphql } from "gatsby";

import { useMeta } from "#lib/useMeta";

import { objectifyNotionData } from "../helpers/objectifyNotionData";

import { Availability } from "#features/Availability";
import { Button } from "#common/Button";
import { Hero } from "#common/Hero";
import { PostsPreview } from "#features/PostsPreview";
import { Seo } from "#common/Seo";

const TITLE = "Blog";

const BlogPage = (props) => {
  const data = objectifyNotionData(props.data.allNotion.nodes);
  const { businessEmail } = useMeta();

  return (
    <>
      <h1 data-a11y-hidden>{TITLE}</h1>
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
      <section className="container page-body flex col gap:2">
        <header>
          <h3>Articles &amp; Whatnot</h3>
        </header>
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
  return <Seo title={TITLE} description={page?.metaDescription} />;
};
