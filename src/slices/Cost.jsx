import React from "react";
import { Link } from "gatsby";
import { Button } from "#common/Button";
import { EmailMe } from "#features/EmailMe";
import { useSlices } from "../lib/useSlices";

export const Cost = () => {
  const cost = useSlices("cost");
  return (
    <div className="background:gray-to-black padding-block:section">
      <section className="container grid grid:12 gap align-items:center">
        <article className="col:12 md:col:7 color:gray-1 flex col gap:wide">
          <header>
            <h2 className="color:yellow">{cost.headline.title}</h2>
            <p className="medium color:gray-2">{cost.subheading.title}</p>
          </header>
          <div className="flex col gap">
            <article
              className="flex col gap"
              dangerouslySetInnerHTML={{
                __html: cost.description.childMarkdownRemark.html,
              }}
            />
            <div className="flex gap">
              <Button
                Tag={Link}
                to="/blog/how-much-hiring-a-freelance-developer-costs/"
              >
                Read the article
              </Button>
              <EmailMe data-theme="dark">Get the TL;DR from me</EmailMe>
            </div>
          </div>
        </article>
        <aside className="col:12 md:col:5">
          <video
            className="video"
            autoPlay={true}
            controls={false}
            muted={true}
            loop={true}
            title={cost.meme.properties.content.value}
          >
            <source src={cost.meme.properties.URL.value} type="video/mp4" />
          </video>
        </aside>
      </section>
    </div>
  );
};
