import React from "react";
import { useLikesList } from "../lib/useLikesList";

export const Likes = () => {
  const { dislikes, likes } = useLikesList();

  return (
    <section className="grid gap:1 grid:1/1">
      <div className="block-gap:1">
        <header>
          <h4>Likes</h4>
        </header>
        <ul className="list">
          {likes.map((like) => (
            <li key={like.id} className="smaller">
              {like.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="block-gap:1">
        <header>
          <h4>Dislikes</h4>
        </header>
        <ul className="list">
          {dislikes.map((dislike) => (
            <li key={dislike.id} className="smaller">
              {dislike.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
