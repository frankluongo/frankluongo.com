import React, { useEffect, useMemo } from "react";
import { graphql } from "gatsby";
import hljs from "highlight.js";

import css from "highlight.js/lib/languages/css";
import html from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";

import "highlight.js/styles/github.css";

import { BlogPost } from "../components/BlogPost";

import * as style from "./post.module.css";
import "#styles/hljs.css";

const Post = ({ data }) => {
  const __html = data.markdownRemark.html;
  const langs = useMemo(() => ({ css, html, javascript }), []);

  useEffect(() => {
    const codeBlocks = document.querySelectorAll("code[class]");
    codeBlocks.forEach((block) => {
      const lang = block.classList[0].split("language-")[1];
      hljs.registerLanguage(lang, langs[lang]);
      hljs.highlightElement(block);
    });
  }, [langs]);

  return (
    <div className={style.PostContent} data-container="blog">
      <header>
        <h1>{data.notion.title}</h1>
      </header>
      <BlogPost dangerouslySetInnerHTML={{ __html }} />
    </div>
  );
};

export const query = graphql`
  query ($id: String!) {
    notion(id: { eq: $id }) {
      id
      title
    }
    markdownRemark(parent: { id: { eq: $id } }) {
      html
      htmlAst
    }
  }
`;

export default Post;
