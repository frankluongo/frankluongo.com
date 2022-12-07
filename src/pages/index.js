import * as React from "react";

import { useHome } from "#lib/useHome";
import { useMeta } from "#lib/useMeta";

import { Availability } from "../components/Availability";
import { Button } from "../components/Button";
import { Hero } from "../components/Hero";
import { Markup } from "../components/Markup";
import { ProjectsPreview } from "../components/ProjectsPreview";

import { Image } from "../components/Image";

import { Link } from "gatsby";

const TITLE = "Home | Frank Luongo Design Co.";

const IndexPage = () => {
  const data = useHome();
  const { businessEmail } = useMeta();
  return (
    <>
      <h1 data-a11y-hidden>{TITLE}</h1>
      <Hero
        path={data.heroImage.properties.imagePath.value}
        alt="Home Page"
        extraStyles={{ heroContent: "color-white" }}
      >
        <h2>
          <strong>Oh, Hello!</strong> I'm Frank Luongo
        </h2>
        <p>{data.heroSubheading.title}</p>
        <Availability />
        <div>
          <Button href={`mailto:${businessEmail.title}`}>
            {businessEmail.title}
          </Button>
        </div>
      </Hero>
      <section className="container page-body flex flex-direction:column gap:3">
        <div className="flex flex-direction:column gap:2">
          <header className="text-align:center flex flex-direction:column gap:1">
            <h3>Check the technique</h3>
            <p>
              My life is <strong>dope</strong> and I do <strong>dope</strong>{" "}
              things. Check out some highlights below or head over to my&nbsp;
              <Link className="link" to="/projects">
                Projects Page
              </Link>{" "}
              to see it all.
            </p>
          </header>
          <ProjectsPreview limit={4} />
          <div className="flex justify-content:center">
            <Button Tag={Link} to="/projects" data-theme="dark">
              See 'Em All
            </Button>
          </div>
        </div>
        <div className="grid align-items:center gap:1 grid:auto-fit/1fr">
          <div className="block-gap:1">
            <Markup
              Tag="article"
              content={data.aboutMeText.childMarkdownRemark.html}
            />
            <Button href={`mailto:${businessEmail.title}`} data-theme="dark">
              Get in touch!
            </Button>
          </div>
          <div>
            <Image
              alt="Frank Luongo"
              path={data.aboutMeImage.properties.imagePath.value}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>{TITLE}</title>;
