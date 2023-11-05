import styled from "styled-components";

import BaseContainer from "#base/Container.styled";
import Typography from "#base/Typography.styled";

export const CallToAction = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Container = styled(BaseContainer)``;

export const Grid = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`;

export const Heading = styled(Typography)`
  margin-bottom: 2rem;
`;

export const Service = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ServiceTitle = styled.h3`
  color: var(--color-tertiary);
`;

export const Services = styled.section`
  padding-block: clamp(3rem, 5vw, 6rem);

  background-color: var(--color-background-light);
`;
