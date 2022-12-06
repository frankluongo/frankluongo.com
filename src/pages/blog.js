import * as React from "react";

import { useBlogPage } from "#lib/useBlogPage";
import { useMeta } from "#lib/useMeta";

import { mdToHTML } from "../helpers/mdToHTML";

import { Availability } from "../components/Availability";
import { Button } from "../components/Button";
import { Hero } from "../components/Hero";
import { PostsPreview } from "../components/PostsPreview";

const TITLE = "Blog | Frank Luongo Design Co.";

const BlogPage = () => {
  const data = useBlogPage();
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
      <section className="container page-body flex flex-direction:column gap:3">
        <PostsPreview />
      </section>
    </>
  );
};

export default BlogPage;

export const Head = () => <title>{TITLE}</title>;