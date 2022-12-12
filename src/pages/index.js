import * as React from "react";
import { graphql, Link } from "gatsby";
import { objectifyNotionData } from "../helpers/objectifyNotionData";

import { useMeta } from "#lib/useMeta";

import { Availability } from "../components/Availability";
import { Button } from "../components/Button";
import { Hero } from "../components/Hero";
import { Markup } from "../components/Markup";
import { ProjectsPreview } from "../components/ProjectsPreview";
import { Seo } from "../components/Seo";

import { Image } from "../components/Image";

const TITLE = "Home";

const IndexPage = (props) => {
  const data = objectifyNotionData(props.data.allNotion.nodes);
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
        <div className="grid align-items:center gap:1 grid:cols-2">
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

export const query = graphql`
  query HomepageQuery {
    allNotion(
      filter: {
        properties: {
          space: { value: { name: { eq: "home" } } }
          published: { value: { eq: true } }
        }
      }
    ) {
      nodes {
        properties {
          slug {
            value
          }
          content {
            value
          }
          imagePath {
            value
          }
          type {
            value {
              name
            }
          }
        }
        id
        title
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <Seo title={TITLE} />;
