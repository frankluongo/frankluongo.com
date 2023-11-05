import * as React from "react";
import Seo from "#lib/Seo/Seo";

import VideoHero from "#features/VideoHero/VideoHero";
import Projects from "#features/Projects/Projects";
import Reviews from "#features/Reviews/Reviews";
import Services from "#features/Services/Services";

const TITLE = "Home";
const Homepage = () => (
  <>
    <VideoHero />
    <Projects />
    <Reviews />
    <Services />
  </>
);
export default Homepage;
export const Head = () => <Seo title={TITLE} />;
