import React, { useState } from "react";

import { useProjects } from "#lib/useProjects";

import { Project } from "#features/Project/Project";
import { Grid } from "#base/Grid/Grid";

import * as css from "./ProjectsPreview.module.css";

export const ProjectsPreview = () => {
  const [active, setActive] = useState(null);
  const projects = useProjects();

  return (
    <Grid useDefaultGrid={false} extraClasses={css.ProjectsPreviewGrid}>
      {projects.map((project) => (
        <Project
          key={project.id}
          {...project}
          active={active}
          setActive={setActive}
        />
      ))}
    </Grid>
  );
};
