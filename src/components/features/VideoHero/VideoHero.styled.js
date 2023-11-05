import styled from "styled-components";

import BaseContainer from "#base/Container.styled";

export const Container = styled(BaseContainer)`
  position: relative;

  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-block: 3rem;

  @media (min-width: 1280px) {
    & {
      gap: 2rem;
      padding-block: 14.3rem;
    }
  }
`;

export const Fallback = styled.div`
  inset: 0;
  position: absolute;

  height: 100%;
  width: 100%;

  background-color: var(--color-background-alt);
`;

export const Heading = styled.h1`
  color: var(--color-primary-alt);
  line-height: 1.2;

  & small {
    color: var(--color-text-alt);
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: 1280px) {
    & small {
      font-size: clamp(1rem, 0.9em, 2rem);
    }
  }
`;

export const Overlay = styled.div`
  inset: 0;
  position: absolute;

  background-color: var(--color-background-alt-transparent-75);
`;

export const Subheading = styled.p`
  color: var(--color-secondary);

  @media (min-width: 500px) {
    & {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 1280px) {
    & {
      font-size: 2rem;
    }
  }
`;

export const TriangleBottom = styled.div`
  bottom: 0;
  position: absolute;
  right: 0;

  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 0 8rem 100vw;
  border-color: transparent transparent var(--color-background-alt) transparent;
  transform: rotate(0deg);
`;

export const Video = styled.video`
  inset: 0;
  position: absolute;

  height: 100%;
  margin-inline: auto;
  width: 100%;

  object-fit: cover;
  pointer-events: none;
`;

export const Wrapper = styled.div`
  position: relative;

  align-items: center;
  display: flex;
  justify-content: center;
  max-height: 90vh;

  background-color: var(--color-background-alt);
`;
