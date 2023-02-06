import React from "react";

import { Button } from "#components/Button";

import { classes } from "../helpers/classes";
import * as css from "#styles/slices/Process.module.css";

export const Process = () => {
  return (
    <div className="background:gray-5">
      <section className="container flex col padding-block:section gap">
        <div className="grid grid:12 gap">
          <header className="col:12 md:col:9">
            <h2 className="color:white">
              The web design and development process
            </h2>
            <p className="medium color:gray-2">
              Here's what you can expect working on a project with me
            </p>
          </header>
        </div>
        <article className={classes([css.section, "color:white flex col"])}>
          <header className={css.header}>
            <h3>Kick-off meeting 👨🏻‍💻</h3>
            <svg
              width="128"
              height="139"
              viewBox="0 0 128 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 0.5V106C2.5 116.333 9.4 137 33 137C56.6 137 100.333 137 128 137"
                stroke="var(--color-yellow)"
                strokeWidth="4"
              />
            </svg>
          </header>
          <p className={css.description}>
            This is exactly how it sounds. We get together via whatever medium
            makes sense (phone, email, in-person meeting, etc.) to go over the
            scope of work and set expectations for your project. Afterward, I'll
            send over a contract and then we get started!
          </p>
        </article>
        <article
          data-section="2"
          className={classes([css.section, "color:white flex col"])}
        >
          <header className={css.header}>
            <h3>Check-ins ✅</h3>
            <svg
              width="128"
              height="139"
              viewBox="0 0 128 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 0.5V106C2.5 116.333 9.4 137 33 137C56.6 137 100.333 137 128 137"
                stroke="var(--color-green)"
                strokeWidth="4"
              />
            </svg>
          </header>
          <p className={css.description}>
            We meet on a regular basis that makes sense for your project! At
            these weekly/bi-weekly/monthly/whenever checkpoints, I'll share
            progress updates and then we'll tweak fonts, adjust spacing and do
            anything else necessary to keep the project moving forward.
          </p>
        </article>
        <article
          data-section="3"
          className={classes([css.section, "color:white flex col"])}
        >
          <header className={css.header}>
            <h3>Launch & Maintenance 🚀</h3>
            <svg
              width="128"
              height="139"
              viewBox="0 0 128 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 0.5V106C2.5 116.333 9.4 137 33 137C56.6 137 100.333 137 128 137"
                stroke="var(--color-blue)"
                strokeWidth="4"
              />
            </svg>
          </header>
          <p className={css.description}>
            This phase is all about taking it to the finish line! I work with
            you to get your website, web app, blog, API, etc. out into the real
            world. Not only that, but once it's out there all of my work comes
            with one year of maintenance to ensure that it not only works, but
            keeps working.
          </p>
          <div className={css.button}>
            <Button href="mailto:frank@frankluongo.com">
              Let's get started!
            </Button>
          </div>
        </article>
      </section>
    </div>
  );
};
