import * as React from "react";
import { graphql } from "gatsby";

import { useMeta } from "#lib/useMeta";

import { mdToHTML } from "../helpers/mdToHTML";
import { objectifyNotionData } from "../helpers/objectifyNotionData";

import { Availability } from "../components/Availability";
import { Button } from "../components/Button";
import { Hero } from "../components/Hero";
import { PostsPreview } from "../components/PostsPreview";
import { Seo } from "../components/Seo";

const TITLE = "Blog";

const BlogPage = (props) => {
  const data = objectifyNotionData(props.data.allNotion.nodes);
  const { businessEmail } = useMeta();

  const __html = mdToHTML(data.heroHeadline.properties.content.value);

  return (
    <>
      <h1 data-a11y-hidden>{TITLE}</h1>
      <Hero
        path={data.heroImage.properties.imagePath.value}
        alt="Blog Page"
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
      <section className="container page-body flex flex-direction:column gap:2">
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
