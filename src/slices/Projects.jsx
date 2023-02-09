import React from "react";
import { Link } from "gatsby";

import { Tile } from "../components/Tile";
import { Tiles } from "../components/Tiles";
import { Truncate } from "../components/Truncate";

import { Button } from "../components/Button";

import * as css from "#styles/slices/Projects.module.css";
import { useSlices } from "../lib/useSlices";

export const Projects = () => {
  const projects = useSlices("projects");
  const projectPreview = Object.keys(projects.project);
  return (
    <section className="container grid grid:12 gap">
      <header className={`${css.ProjectsHeader} col:12 md:col:9`}>
        <div className={css.ProjectsHeaderBg} />
        <div className={css.ProjectsHeaderText}>
          <h2>{projects.headline.title}</h2>
          <p className="medium">{projects.subheading.title}</p>
        </div>
      </header>
      <div
        className="col:12 md:col:6"
        dangerouslySetInnerHTML={{
          __html: projects.sliceDescription.childMarkdownRemark.html,
        }}
      />
      <Tiles extraClasses="col:12">
        {projectPreview.map((key) => {
          const prev = projects.project[key];
          return (
            <Tile key={key} extraClasses="grid gap grid:12">
              <div className="padding:1 md:padding:2 flex col gap:1 col:8">
                <h3 className="color:link">{prev.heading.title}</h3>
                {prev?.readMore ? (
                  <Truncate
                    rest={
                      <div
                        dangerouslySetInnerHTML={{
                          __html: prev.readMore.childMarkdownRemark.html,
                        }}
                      />
                    }
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: prev.description.childMarkdownRemark.html,
                      }}
                    ></div>
                  </Truncate>
                ) : (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: prev.description.childMarkdownRemark.html,
                    }}
                  />
                )}
              </div>
              <figure
                className="has-background-image col:4"
                style={{
                  backgroundImage: `url("${prev?.image?.properties?.content?.value}")`,
                }}
              />
            </Tile>
          );
        })}
      </Tiles>
      <footer className="flex col:12">
        <Button Tag={Link} to="/projects" data-theme="dark">
          View all projects
        </Button>
      </footer>
    </section>
  );
};
