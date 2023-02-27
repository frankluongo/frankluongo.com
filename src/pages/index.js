import * as React from "react";
import { graphql } from "gatsby";
import { objectifyNotionData } from "../helpers/objectifyNotionData";

import { useMeta } from "#lib/useMeta";

import { Button } from "#base/Button/Button";
import { Hero } from "#base/Hero/Hero";
import { Seo } from "#base/Seo";

import { SliceProcess } from "#features/SliceProcess/SliceProcess";
import { SliceHire } from "#features/SliceHire/SliceHire";
import { SliceServices } from "#features/SliceServices/SliceServices";
import { SliceProjects } from "#features/SliceProjects/SliceProjects";
import { SliceCost } from "#features/SliceCost/SliceCost";

const TITLE = "Home";

const IndexPage = (props) => {
  const data = objectifyNotionData(props.data.allNotion.nodes);
  const { businessEmail } = useMeta();
  return (
    <>
      <Hero
        path={data.heroImage.properties.imagePath.value}
        alt="Home Page"
        extraStyles={{ heroContent: "color:white grid grid:12 gap" }}
      >
        <div className="col:12 md:col:9 flex col gap:1">
          <div className="flex col gap:0.5">
            <span className="large color:gray-2">Hey! I'm Frank Luongo, a</span>
            <h1>Freelance web developer in Scranton, PA</h1>
            <p className="large color:gray-2">
              I create websites, API's, webapps and more!
            </p>
          </div>
          <div>
            <Button href={`mailto:${businessEmail.title}`}>
              {businessEmail.title}
            </Button>
          </div>
        </div>
      </Hero>
      <SliceProjects />
      <div className="margin-block:section" />
      <SliceHire />
      <SliceProcess />
      <SliceServices />
      <SliceCost />
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
