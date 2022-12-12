import * as React from "react";
import { graphql } from "gatsby";

import { useMeta } from "#lib/useMeta";
import { objectifyNotionData } from "../helpers/objectifyNotionData";

import { Availability } from "../components/Availability";
import { Button } from "../components/Button";
import { Hero } from "../components/Hero";
import { ProjectsPreview } from "../components/ProjectsPreview";
import { Seo } from "../components/Seo";

import { mdToHTML } from "../helpers/mdToHTML";

const TITLE = "Projects";

const ProjectsPage = (props) => {
  const data = objectifyNotionData(props.data.allNotion.nodes);
  const { businessEmail } = useMeta();

  const __html = mdToHTML(data.heroHeadline.properties.content.value);

  return (
    <>
      <h1 data-a11y-hidden>{TITLE}</h1>
      <Hero
        path={data.heroImage.properties.imagePath.value}
        alt="Projects"
        extraStyles={{ heroContent: "color-white" }}
      >
        <h2 dangerouslySetInnerHTML={{ __html }} />
        <p>{data.heroSubheading.properties.content.value}</p>
        <Availability />
        <div>
          <Button href={`mailto:${businessEmail.title}`}>
            {businessEmail.title}
          </Button>
        </div>
      </Hero>
      <div className="container page-body flex flex-direction:column gap:3">
        <ProjectsPreview />
      </div>
    </>
  );
};

export const query = graphql`
  query ProjectsPageQuery {
    allNotion(
      filter: {
        properties: {
          published: { value: { eq: true } }
          space: { value: { name: { eq: "projectsPage" } } }
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
        }
        title
        id
      }
    }
  }
`;

export default ProjectsPage;

export const Head = ({ data }) => {
  const page = objectifyNotionData(data.allNotion.nodes);
  return <Seo title={TITLE} description={page?.metaDescription} />;
};
