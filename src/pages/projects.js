import * as React from "react";

import { useProjectsPage } from "../lib/useProjectsPage";
import { useMeta } from "#lib/useMeta";

import { Availability } from "../components/Availability";
import { Button } from "../components/Button";
import { Hero } from "../components/Hero";
import { ProjectsPreview } from "../components/ProjectsPreview";
import { Seo } from "../components/Seo";

import { mdToHTML } from "../helpers/mdToHTML";

const TITLE = "Projects";

const ProjectsPage = () => {
  const data = useProjectsPage();
  const { businessEmail } = useMeta();

  const __html = mdToHTML(data.heroHeadline.properties.content.value);

  return (
    <>
      <h1 data-a11y-hidden>{TITLE}</h1>
      <Hero
        path={data.heroImage.properties.imagePath.value}
        alt="Projects"
        extraStyles={{ heroContent: "color-white" }}
      >
        <h2 dangerouslySetInnerHTML={{ __html }} />
        <p>{data.heroSubheading.properties.content.value}</p>
        <Availability />
        <div>
          <Button href={`mailto:${businessEmail.title}`}>
            {businessEmail.title}
          </Button>
        </div>
      </Hero>
      <div className="container page-body flex flex-direction:column gap:3">
        <ProjectsPreview />
      </div>
    </>
  );
};

export default ProjectsPage;

export const Head = () => <Seo title={TITLE} />;
