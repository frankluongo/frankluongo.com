import React from "react";
import { Link } from "gatsby";

import { Card } from "#base/Card/Card";
import { Image } from "#base/Image/Image";

import { classes } from "#helpers/classes";

import * as css from "./PostPreview.module.css";

export const PostPreview = (post) => {
  const linkClasses = classes([css.Link, "flex col gap:0.5"]);
  const title = post.title.replaceAll("**", "");

  return (
    <Card Tag={Link} extraClasses={linkClasses} to={`/blog/${post.slug}`}>
      <header className="flex gap:1 align-items:center">
        <figure className={css.PreviewImage}>
          <Image alt={title} path={post.previewImage} />
        </figure>
        <h3 className="h4">{title}</h3>
      </header>
      <section>
        <p className="smaller color:--text-default">{post.content}</p>
      </section>
      <footer className="flex gap:0.5 align-items:center">
        <strong className="color:--text-default smaller">Tags:</strong>
        {post.tags.map((tag, i) => (
          <small key={i} className={css.Tag}>
            {tag.name}
          </small>
        ))}
      </footer>
    </Card>
  );
};
