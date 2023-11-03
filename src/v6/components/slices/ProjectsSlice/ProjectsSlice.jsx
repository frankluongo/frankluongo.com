import React from "react";
import Hero from "#v6/components/features/Hero/Hero";
import Highlights from "#v6/components/features/Highlights/Highlights";

import useProjectsSlice from "./useProjectsSlice";

export default function ProjectsSlice() {
  const data = useProjectsSlice();
  return (
    <>
      <Hero
        image={data.image}
        heading="Freelance website development projects"
        description={`I've said it before and I'll say it again, My life is dope and I do dope things. Check them out below:`}
      />
      <Highlights />
    </>
  );
}
