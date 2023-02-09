import React from "react";
import { Tile } from "../components/Tile";

import { classes } from "../helpers/classes";
import { useSlices } from "../lib/useSlices";

import * as css from "#styles/slices/WhyHire.module.css";

export const WhyHire = () => {
  const hire = useSlices("whyHire");
  const reasons = Object.keys(hire.hireReason);

  return (
    <div className="background:blue-to-dark padding-block:section">
      <section className="container grid grid:12 gap:wide">
        <div className="col:12 grid grid:12 gap">
          <header className="col:12 md:col:9">
            <h2 className="color:white">{hire.headline.title}</h2>
            <p className="medium color:white">{hire.subheading.title}</p>
          </header>
          <div
            className="col:12 md:col:6 color:gray-1"
            dangerouslySetInnerHTML={{
              __html: hire.sliceDescription.childMarkdownRemark.html,
            }}
          />
        </div>
        {reasons.map((key) => {
          const reason = hire.hireReason[key];
          return (
            <Tile
              key={key}
              extraClasses="col:12 sm:col:6 padding:1 md:padding:2 flex col gap:0.5 position:relative"
              styleOverrides={{ overflow: "visible" }}
            >
              <header className="flex gap:0.5 align-items:center">
                <strong
                  className={classes([
                    css.Number,
                    "medium color:yellow-on-white",
                  ])}
                >
                  0{key}
                </strong>
                <h3 className="color:link">{reason.heading.title}</h3>
              </header>
              <div
                className="color:gray-4"
                dangerouslySetInnerHTML={{
                  __html: reason.description.childMarkdownRemark.html,
                }}
              />
            </Tile>
          );
        })}
      </section>
    </div>
  );
};
