import React from "react";

import { useProjects } from "#lib/useProjects";

import { Card } from "#components/Card";

import * as css from "./ProjectsPreview.module.css";

export const ProjectsPreview = () => {
  const projects = useProjects();

  return (
    <section className={css.Previews} data-container>
      {projects.map((project) => (
        <Card
          key={project.id}
          previewImage={project.previewImage}
          slug={project.slug}
          thumbnailImage={project.thumbnailImage}
          title={project.title}
        />
      ))}
    </section>
  );
};
