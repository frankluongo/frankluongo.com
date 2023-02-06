import React from "react";
import { Link } from "gatsby";
import { usePosts } from "#lib/usePosts";
import { Image } from "./Image";
import { classes } from "../helpers/classes";
import * as css from "#styles/components/PostsPreview.module.css";

export const PostsPreview = () => {
  const posts = usePosts();
  return (
    <ul className={css.List}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostPreview {...post} />
        </li>
      ))}
    </ul>
  );
};

function PostPreview(post) {
  const linkClasses = classes([css.Link, "flex col gap:0.5"]);
  const title = post.title.replaceAll("**", "");

  return (
    <Link className={linkClasses} to={`/blog/${post.slug}`}>
      <header className="flex gap:1 align-items:center">
        <figure className={css.PreviewImage}>
          <Image alt={title} path={post.previewImage} />
        </figure>
        <h4>{title}</h4>
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
    </Link>
  );
}
