import React from "react";
import { Link } from "gatsby";

import { Tile } from "../components/Tile";
import { Tiles } from "../components/Tiles";
import { Truncate } from "../components/Truncate";

import { Button } from "../components/Button";

import * as css from "#styles/slices/Projects.module.css";

export const Projects = () => {
  return (
    <section className="container grid grid:12 gap">
      <header className={`${css.ProjectsHeader} col:12 md:col:9`}>
        <div className={css.ProjectsHeaderBg} />
        <div className={css.ProjectsHeaderText}>
          <h2>My favorite web development projects</h2>
          <p className="medium">check the technique!</p>
        </div>
      </header>
      <p className="col:12 md:col:6">
        My life is dope and I do dope things, including web development and
        design. I've done freelance projects for companies large and small.
      </p>
      <Tiles extraClasses="col:12">
        <Tile extraClasses="grid gap grid:12">
          <div className="padding:1 md:padding:2 flex col gap:1 col:8">
            <h3 className="color:link">Brotherly Love Real Estate</h3>
            <p>
              When the team at Brotherly Love Real Estate needed help launching
              their digital presence, they reached out to me for help. I guided
              them through the whole project from start to finish.
            </p>
            <p>
              From registering their domain, setting up their DNS and web
              hosting to designing, developing and building up their
              fully-custom WordPress site; I did it all for them. In addition to
              all the above, I've implemented tons of custom features for SEO,
              marketing, and site personalization. - ask me about it!
            </p>
          </div>
          <figure
            className="has-background-image col:4"
            style={{ backgroundImage: `url("/img/blre.png")` }}
          />
        </Tile>
        <Tile extraClasses="grid gap grid:12">
          <div className="padding:1 md:padding:2 flex col gap:1 col:8">
            <h3 className="color:link">M. Night Shyamalan Foundation</h3>
            <Truncate
              rest={
                <p>
                  Since 2017, I've continued working with the foundation on a
                  yearly basis to keep Shyamaween going strong, as well as
                  updating and maintaining there WordPress site as necessary.
                </p>
              }
            >
              <p>
                I started doing freelance work for MNSF in 2017. In that time, I
                built a fully-custom WordPress theme for the M. Night Shyamalan
                Foundation AND created a fully-custom checkout experience for
                their biggest fund-raising event of the year, Shyamaween.
              </p>
            </Truncate>
          </div>
          <figure
            className="has-background-image col:4"
            style={{ backgroundImage: `url("/img/mnsf.png")` }}
          />
        </Tile>
        <Tile extraClasses="grid gap grid:12">
          <div className="padding:1 md:padding:2 flex col gap:1 col:8">
            <h3 className="color:link">Alicia Stepp Photography</h3>
            <Truncate
              rest={
                <p>
                  For this project, I implemented horizontal scrolling; a .pdf
                  builder; custom animations; and much, much more! While
                  starting on Squarespace, we quickly outgrew the capabilities
                  on that platform and I had to coordinate a move to WordPress
                  shortly thereafter. After that switch was made, I built a
                  theme from scratch tailored to the client's specific needs and
                  made use of custom fields so they could build each gallery
                  page to their exact specifications.
                </p>
              }
            >
              <p>
                Photography websites need to be dynamic and this was no
                exception...
              </p>
            </Truncate>
          </div>
          <figure
            className="has-background-image col:4"
            style={{ backgroundImage: `url("/img/astepp.jpg")` }}
          />
        </Tile>
      </Tiles>
      <footer className="flex col:12">
        <Button Tag={Link} to="/projects" data-theme="dark">
          View all projects
        </Button>
      </footer>
    </section>
  );
};
