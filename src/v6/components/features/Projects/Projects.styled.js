import styled from "styled-components";

import BaseContainer from "#v6/components/base/Container.styled";
import { Link } from "gatsby";

export const Background = styled.svg`
  position: relative;
  top: -1.25rem;
`;

export const Card = styled(Link)`
  display: block;
  padding: 1rem;

  background-color: white;
  border-radius: 0.5rem;
`;

export const Container = styled(BaseContainer)`
  position: relative;
  z-index: 1;

  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Description = styled.p`
  color: var(--color-secondary);
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 3rem;
`;

export const Heading = styled.h2`
  color: var(--color-primary-alt);
`;

export const Projects = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  flex: 1;
  width: 100%;
`;

export const Wrapper = styled.div`
  position: relative;

  background-color: var(--color-background-alt);
`;
