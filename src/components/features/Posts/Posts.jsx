import React from "react";
import { usePosts } from "./usePosts";

import * as Styled from "./Posts.styled";

export default function Posts() {
  const posts = usePosts();
  return (
    <Styled.Container as="section">
      <h2>Posts</h2>
      <Styled.Grid>
        {posts.map((post) => (
          <Styled.Post key={post.id} href={`/blog/${post.slug}`}>
            <h3>{post.title}</h3>
            <Styled.Description>{post.excerpt}</Styled.Description>
          </Styled.Post>
        ))}
      </Styled.Grid>
    </Styled.Container>
  );
}
