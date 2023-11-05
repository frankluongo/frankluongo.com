import * as React from "react";

import Hero from "#features/Hero/Hero";
import Posts from "#features/Posts/Posts";

import useBlogRoute from "./useBlogRoute";

export default function BlogRoute() {
  const data = useBlogRoute();
  return (
    <>
      <Hero
        image={data.image}
        heading="The Obligatory Blog"
        description={`Sometimes I write things down, and occasionally I even post those things here`}
      />
      <Posts />
    </>
  );
}
