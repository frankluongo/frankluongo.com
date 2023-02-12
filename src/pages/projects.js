import * as React from "react";
import { graphql } from "gatsby";

import { useMeta } from "#lib/useMeta";
import { objectifyNotionData } from "../helpers/objectifyNotionData";

import { Availability } from "#features/Availability";
import { Button } from "#common/Button";
import { Hero } from "#common/Hero";
import { ProjectsPreview } from "#features/ProjectsPreview";
import { Seo } from "#common/Seo";

import { mdToHTML } from "../helpers/mdToHTML";

const TITLE = "Projects";

const ProjectsPage = (props) => {
  const data = objectifyNotionData(props.data.allNotion.nodes);
  const { businessEmail } = useMeta();

  const __html = mdToHTML(data.heroHeadline.properties.content.value);

  return (
    <>
      <Hero
        path={data.heroImage.properties.imagePath.value}
        alt="Projects"
        extraStyles={{ heroContent: "color:white grid grid:12 gap" }}
      >
        <div className="col:12 md:col:9 flex col gap:1">
          <div className="flex col gap:0.5">
            <h1 dangerouslySetInnerHTML={{ __html }} />
            <p className="large color:gray-1">
              {data.heroSubheading.properties.content.value}
            </p>
            <Availability />
          </div>
          <div>
            <Button href={`mailto:${businessEmail.title}`}>
              {businessEmail.title}
            </Button>
          </div>
        </div>
      </Hero>
      <div className="container page-body flex col gap:3">
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
