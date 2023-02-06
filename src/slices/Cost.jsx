import React from "react";
import { Link } from "gatsby";
import { Button } from "../components/Button";

export const Cost = () => {
  return (
    <div className="background:gray-to-black padding-block:section">
      <section className="container grid grid:12 gap align-items:center">
        <article className="col:12 md:col:7 color:gray-1 flex col gap:wide">
          <header>
            <h2 className="color:yellow">
              How much does it cost to hire a freelance website developer?
            </h2>
            <p className="medium color:gray-2">
              This is a big question, and I'd love to give a simple answer, but
              it kinda-sorta depends.
            </p>
          </header>
          <div className="flex col gap">
            <p>
              There are several factors that contribute to the overall cost of
              of your project. Timeline, scope of work, and clarity of that
              scope will determine whether a project will be billed hourly,
              billed at a flat rate, or done as a hybrid of both.
            </p>
            <p>
              With that said, I realize a lof the terms above sound like jargon.
              So, I've written this blog article detailing exactly what this all
              means.
            </p>
            <div className="flex gap">
              <Button
                Tag={Link}
                to="/blog/how-much-hiring-a-freelance-developer-costs/"
              >
                Read the article
              </Button>
              <Button href={`mailto:frank@frankluongo.com`} data-theme="dark">
                Get the TL;DR from me
              </Button>
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
          >
            <source
              src="https://media.giphy.com/media/l0IylOPCNkiqOgMyA/giphy.mp4"
              type="video/mp4"
            />
          </video>
        </aside>
      </section>
    </div>
  );
};
