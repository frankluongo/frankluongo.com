import * as React from "react";

import Hero from "#features/Hero/Hero";
import Highlights from "#lib/Highlights/Highlights";

import useProjectsRoute from "./useProjectsRoute";

export default function ProjectsRoute() {
  const data = useProjectsRoute();
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
