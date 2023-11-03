import styled from "styled-components";
import BaseContainer from "#v6/components/base/Container.styled";
import { Link } from "gatsby";

export const Container = styled(BaseContainer)`
  padding-block: clamp(3rem, 5vw, 5rem);
`;

export const Description = styled.p`
  color: var(--color-text);
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  margin-top: 2rem;
`;

export const Post = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
`;
