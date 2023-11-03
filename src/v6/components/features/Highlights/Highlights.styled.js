import styled from "styled-components";

import BaseContainer from "#v6/components/base/Container.styled";
import { GatsbyImage } from "gatsby-plugin-image";

export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Content = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-area: content;
`;

export const Description = styled.p``;

export const Highlight = styled.article`
  display: grid;
  align-items: center;
  grid-template-areas: "image content";
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  &:nth-child(even) {
    grid-template-areas: "content image";
  }
`;

export const Highlights = styled.div`
  padding-block: clamp(3rem, 12vw, 6rem);
`;

export const Image = styled(GatsbyImage)`
  display: block;
  grid-area: image;

  border: 1px solid var(--color-border);
  border-radius: 1rem;
  overflow: hidden;
`;

export const Link = styled.a``;

export const Title = styled.h2`
  color: var(--color-tertiary);
`;
