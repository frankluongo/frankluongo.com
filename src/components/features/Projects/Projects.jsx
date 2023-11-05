import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "#base/Button.styled";
import * as Styled from "./Projects.styled";
import useProjects from "./useProjects";

export default function Projects() {
  const projects = useProjects();
  return (
    <>
      <Styled.Wrapper>
        <Styled.Container>
          <Styled.Header>
            <Styled.Heading>Recent projects from my portfolio</Styled.Heading>
            <Styled.Description>
              Below are some highlights of design, user experience, and
              development work that I&apos;ve done for a wide range of clients.
            </Styled.Description>
          </Styled.Header>
          <Styled.Projects>
            {projects.map((project) => (
              <li key={project.title}>
                <Styled.Card to={project.url}>
                  <GatsbyImage
                    image={getImage(project.image)}
                    alt={project.title}
                  />
                </Styled.Card>
              </li>
            ))}
          </Styled.Projects>
          <Button as={Link} to="/projects">
            View all projects
          </Button>
        </Styled.Container>
      </Styled.Wrapper>
      <Styled.Background
        viewBox="0 0 1280 213"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M340 213C18.4 213 -136.667 75.6667 -174 7L1786 0C1733 28.3333 1548.8 85 1236 85C845 85 742 213 340 213Z"
          fill="#272321"
        />
      </Styled.Background>
    </>
  );
}
