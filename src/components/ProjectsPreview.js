import React from "react";

import { useProjects } from "#lib/useProjects";

import { Card } from "#components/Card";

import * as css from "./ProjectsPreview.module.css";

export const ProjectsPreview = ({ limit }) => {
  const projects = useProjects();
  let visibleProjects = projects;
  if (limit) visibleProjects = projects.slice(0, limit);

  return (
    <section className={css.Previews}>
      {visibleProjects.map((project) => (
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

ProjectsPreview.defaultProps = {
  limit: false,
};
