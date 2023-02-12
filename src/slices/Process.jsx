import React from "react";

import { useSlices } from "../lib/useSlices";

import { classes } from "../helpers/classes";

import { EmailMe } from "#features/EmailMe";

import * as css from "#styles/slices/Process.module.css";

export const Process = () => {
  const process = useSlices("process");
  const steps = Object.keys(process.processStep);
  return (
    <div className="background:gray-5">
      <section className="container flex col padding-block:section gap">
        <div className="grid grid:12 gap">
          <header className="col:12 md:col:9">
            <h2 className="color:white">{process.headline.title}</h2>
            <p className="medium color:gray-2">{process.subheading.title}</p>
          </header>
        </div>
        {steps.map((key, i) => {
          const number = i + 1;
          const step = process.processStep[key];
          return (
            <article
              key={`${step.heading.title}-${i}`}
              className={classes([css.section, "color:white flex col"])}
              data-section={number}
            >
              <header className={css.header}>
                <h3>{step.heading.title}</h3>
                <svg
                  width="128"
                  height="139"
                  viewBox="0 0 128 139"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0.5V106C2.5 116.333 9.4 137 33 137C56.6 137 100.333 137 128 137"
                    stroke={`var(${step.color.title})`}
                    strokeWidth="4"
                  />
                </svg>
              </header>
              <div
                className={css.description}
                dangerouslySetInnerHTML={{
                  __html: step.description.childMarkdownRemark.html,
                }}
              />
              {number === steps.length && (
                <div className={css.button}>
                  <EmailMe>Let's get started!</EmailMe>
                </div>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
};
