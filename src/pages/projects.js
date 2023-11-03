import * as React from "react";
import { Seo } from "#base/Seo";
import ProjectsSlice from "#v6/components/slices/ProjectsSlice/ProjectsSlice";
const Projects = () => <ProjectsSlice />;
export const Head = () => (
  <Seo
    title={"Freelance Projects"}
    description={`Whether it's WordPress, Shopify, Squarespace, or something else entirely, as long as it includes HTML, CSS, JavaScript, I'm your guy!`}
  />
);

export default Projects;
