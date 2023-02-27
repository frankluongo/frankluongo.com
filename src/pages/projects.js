import * as React from "react";
import { graphql } from "gatsby";

import { useMeta } from "#lib/useMeta";

import { Button } from "#base/Button/Button";
import { Hero } from "#base/Hero/Hero";
import { SectionHeader } from "#base/SectionHeader/SectionHeader";
import { Seo } from "#base/Seo";

import { Availability } from "#features/Availability/Availability";
import { ProjectsPreview } from "#features/ProjectsPreview/ProjectsPreview";

import { mdToHTML } from "../helpers/mdToHTML";
import { objectifyNotionData } from "../helpers/objectifyNotionData";
import { stripMarkdown } from "../helpers/stripMarkdown";

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
      <SectionHeader headerStyle="blue">My Projects</SectionHeader>
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
  const dynamicTitle = stripMarkdown(
    page?.heroHeadline?.properties?.content?.value
  );
  return (
    <Seo
      title={dynamicTitle || "Projects"}
      description={page?.metaDescription}
    />
  );
};
