import * as React from "react";
import Seo from "#lib/Seo/Seo";
import ProjectsRoute from "#routes/ProjectsRoute/ProjectsRoute";
const Projects = () => <ProjectsRoute />;
export const Head = () => (
  <Seo
    title={"Freelance Projects"}
    description={`Whether it's WordPress, Shopify, Squarespace, or something else entirely, as long as it includes HTML, CSS, JavaScript, I'm your guy!`}
  />
);
export default Projects;
