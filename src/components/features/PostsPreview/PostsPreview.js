import React from "react";
import { usePosts } from "#lib/usePosts";
import { PostPreview } from "../PostPreview/PostPreview";
import * as css from "./PostsPreview.module.css";

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
