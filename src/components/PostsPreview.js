import React from "react";

import { usePosts } from "#lib/usePosts";
import { Link } from "gatsby";

import * as css from "#styles/components/PostsPreview.module.css";

export const PostsPreview = () => {
  const posts = usePosts();
  return (
    <ul className={css.List}>
      {posts.map((post) => (
        <li key={post.id}>
          <Link className={css.Link} to={`/blog/${post.slug}`}>
            {post.title.replaceAll("**", "")}
          </Link>
        </li>
      ))}
    </ul>
  );
};
