import React from "react";
import Hero from "#v6/components/features/Hero/Hero";
import Posts from "#v6/components/features/Posts/Posts";

import useBlogSlice from "./useBlogSlice";

export default function BlogSlice() {
  const data = useBlogSlice();
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
