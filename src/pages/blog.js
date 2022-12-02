import * as React from "react";
import { PostsPreview } from "../components/PostsPreview";

import * as css from "./blog.module.css";

const TITLE = "Blog | Frank Luongo Design Co.";

const BlogPage = () => {
  return (
    <>
      <h1 data-a11y-hidden>{TITLE}</h1>
      <section className={css.Wrapper} data-container>
        <PostsPreview />
      </section>
    </>
  );
};

export default BlogPage;

export const Head = () => <title>{TITLE}</title>;
