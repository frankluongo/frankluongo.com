import React from "react";

import VideoHero from "#v6/components/features/VideoHero/VideoHero";
import Projects from "#v6/components/features/Projects/Projects";
import Reviews from "#v6/components/features/Reviews/Reviews";
import Services from "#v6/components/features/Services/Services";

export default function HomeSlice() {
  return (
    <>
      <VideoHero />
      <Projects />
      <Reviews />
      <Services />
    </>
  );
}
