import styled from "styled-components";

import BaseContainer from "#base/Container.styled";
import Typography from "#base/Typography.styled";

export const Background = styled.svg`
  margin-block: calc(clamp(2rem, 10vw, 3rem) * -1);

  pointer-events: none;
  z-index: 1;
`;

export const Container = styled(BaseContainer)`
  position: relative;
  z-index: 2;

  @media (max-width: 699.5px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const Reviews = styled.section`
  padding-top: clamp(3rem, 10vw, 6rem);

  background-color: var(--color-background);
`;

export const Heading = styled(Typography)`
  margin-bottom: 2rem;
`;
