import * as React from "react";
import { graphql } from "gatsby";
import { objectifyNotionData } from "../helpers/objectifyNotionData";

import { useMeta } from "#lib/useMeta";

import { Button } from "#common/Button";
import { Hero } from "#common/Hero";
import { Seo } from "#common/Seo";

import { Process } from "../slices/Process";
import { WhyHire } from "../slices/WhyHire";
import { Services } from "../slices/Services";
import { Projects } from "../slices/Projects";
import { Cost } from "../slices/Cost";

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
      <Projects />
      <div className="margin-block:section" />
      <WhyHire />
      <Process />
      <Services />
      <Cost />
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
