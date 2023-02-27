import React from "react";
import { EmailMe } from "#features/EmailMe/EmailMe";
import { Tile } from "#base/Tile/Tile";
import { useMeta } from "#lib/useMeta";
import { useSlices } from "#lib/useSlices";

export const SliceServices = () => {
  const emailAddress = useMeta().businessEmail?.title;
  const { headline, service, subheading } = useSlices("services");

  return (
    <div className="background:green-to-dark padding-block:section">
      <section className="container grid grid:12 gap:1">
        <header className="col:12 md:col:9">
          <h2 className="color:green text-shadow:black">{headline.title}</h2>
          <p className="medium color:gray-2 flex gap:tight">
            {subheading.title}
            <EmailMe className="link color:white" Tag="a">
              {emailAddress}
            </EmailMe>
          </p>
        </header>
        <div className="col:12" />
        {Object.keys(service).map((key) => {
          const serviceObj = service[key];
          return (
            <Tile
              key={serviceObj.heading.title}
              extraClasses="col:12 md:col:6 flex col gap:tight padding:1 md:padding:2"
            >
              <h3 className="color:link">{serviceObj.heading.title}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: serviceObj.description.childMarkdownRemark.html,
                }}
              />
            </Tile>
          );
        })}
        <article className="col:12 md:col:6 flex align-items:center">
          <EmailMe data-theme="dark">So, what can I build for ya?</EmailMe>
        </article>
      </section>
    </div>
  );
};
