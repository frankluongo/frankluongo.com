import React from "react";
import { Tile } from "../components/Tile";

import * as css from "#styles/slices/WhyHire.module.css";
import { classes } from "../helpers/classes";

const hireReasons = [
  {
    number: "01",
    title: "Communication Skills",
    description: `I've been working remotely for years! I'm an effective communicator
    over text, phone, email, zoom, hangout or whatever else. Also, if
    you're local I'm happy to meet in-person!`,
  },
  {
    number: "02",
    title: "Project Flexibility",
    description: `Whether you need a little or a lot, I can build it. API's,
    WordPress, Shopify, Squarespace, React, Docker, Digital Ocean,
    GoDaddy, etc. whatever you're working with, I can work with it.`,
  },
  {
    number: "03",
    title: "Professional Maturity",
    description: `I've been designing, building and maintaining websites and web apps
    for over 10 years. I run my freelance business as an LLC and I know
    how to set expectations, meet deadlines and can move at whatever
    pace you need.`,
  },
  {
    number: "04",
    title: "Cost Effectiveness",
    description: `I'll dig a bit deeper into this later, but the gist is that, since
    I'm a smaller operation, you can expect to pay less than if you were
    bringing on a huge agency. However, you can still expect a
    high-level of quality.`,
  },
];

export const WhyHire = () => {
  return (
    <div className="background:blue-to-dark padding-block:section">
      <section className="container grid grid:12 gap:wide">
        <div className="col:12 grid grid:12 gap">
          <header className="col:12 md:col:9">
            <h2 className="color:white">Why hire a freelance web developer</h2>
            <p className="medium color:white">
              ...and why that web developer should be me
            </p>
          </header>
          <div className="col:12 md:col:6">
            <p className="color:gray-1">
              Hiring a freelance web developer can seem daunting. There are a
              number of factors to consider, here are some that make me stand
              out:
            </p>
          </div>
        </div>
        {hireReasons.map((reason) => (
          <Tile
            key={reason.number}
            extraClasses="col:12 sm:col:6 padding:1 md:padding:2 flex col gap:0.5 position:relative"
            styleOverrides={{ overflow: "visible" }}
          >
            <header className="flex gap:0.5 align-items:center">
              <strong className={classes([css.Number, "medium color:yellow"])}>
                {reason.number}
              </strong>
              <h3 className="color:link">{reason.title}</h3>
            </header>
            <p className="color:gray-4">{reason.description}</p>
          </Tile>
        ))}
      </section>
    </div>
  );
};
