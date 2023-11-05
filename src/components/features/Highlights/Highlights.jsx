import React from "react";
import Button from "#base/Button.styled";
import { getImage } from "gatsby-plugin-image";
import useHighlights from "./useHighlights";
import * as Styled from "./Highlights.styled";

export default function Highlights() {
  const highlights = useHighlights();
  return (
    <Styled.Highlights>
      <Styled.Container>
        {highlights.map((highlight, index) => {
          return (
            <Styled.Highlight key={index} id={highlight.slug}>
              <Styled.Image
                image={getImage(highlight.image)}
                alt={highlight.title}
              />
              <Styled.Content>
                <Styled.Title>{highlight.title}</Styled.Title>
                <Styled.Description>{highlight.description}</Styled.Description>
                <Button
                  as="a"
                  $variant="alternate"
                  href={highlight.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project
                </Button>
              </Styled.Content>
            </Styled.Highlight>
          );
        })}
      </Styled.Container>
    </Styled.Highlights>
  );
}
