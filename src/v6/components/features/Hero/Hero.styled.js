import styled from "styled-components";

import BaseContainer from "#v6/components/base/Container.styled";

export const Background = styled.figure`
  inset: 0;
  position: absolute;

  height: 100%;
  width: 100%;

  & [data-gatsby-image-wrapper] {
    inset: 0;
    position: absolute;
  }

  &::after {
    background-color: var(--color-black-75);
    content: "";

    height: 100%;
    width: 100%;

    position: absolute;
    z-index: 1;
  }
`;
export const Container = styled(BaseContainer)``;
export const Description = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Heading = styled.h1`
  color: var(--color-primary-alt);
`;
export const Hero = styled.div`
  position: relative;

  padding-block: clamp(4rem, 12vw, 8rem);
`;
