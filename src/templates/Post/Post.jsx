import React, { useEffect, useMemo } from "react";
import { graphql } from "gatsby";
import hljs from "highlight.js";

import css from "highlight.js/lib/languages/css";
import html from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";

import BlogPost from "#features/BlogPost/BlogPost";
import Seo from "#lib/Seo/Seo";

import "highlight.js/styles/github.css";
import "#styles/hljs.css";
import * as Styled from "./Post.styled";

const PostTemplate = ({ data }) => {
  const __html = data.notion.childMarkdownRemark.html;
  const langs = useMemo(() => ({ css, html, javascript }), []);

  const rawTitle = data.notion.title.replaceAll("**", "");

  useEffect(() => {
    const codeBlocks = document.querySelectorAll("code[class]");
    codeBlocks.forEach((block) => {
      const lang = block.classList[0]?.split("language-")[1];
      hljs.registerLanguage(lang, langs[lang]);
      hljs.highlightElement(block);
    });
  }, [langs]);

  return (
    <Styled.Container $variant="blog">
      <header>
        <h1>{rawTitle}</h1>
      </header>
      <BlogPost dangerouslySetInnerHTML={{ __html }} />
    </Styled.Container>
  );
};

export const query = graphql`
  query ($id: String!) {
    notion(id: { eq: $id }) {
      id
      title
      childMarkdownRemark {
        html
      }
    }
  }
`;

export default PostTemplate;

export const Head = ({ pageContext }) => (
  <Seo title={pageContext.title.replaceAll("**", "")} />
);
