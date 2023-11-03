import styled from "styled-components";

import BaseContainer from "#v6/components/base/Container.styled";

export const Blurb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 36rem;

  color: var(--color-text-alt);
`;

export const Container = styled(BaseContainer)`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`;

export const Copyright = styled.div`
  padding-block: 1.5rem;

  color: var(--color-text-alt-light);

  background-color: var(--color-background-alt);
`;

export const Footer = styled.footer`
  padding-block: clamp(4rem, 8vw, 8rem);

  background-color: var(--color-background-alt);
`;

export const SkinnyText = styled.span`
  font-weight: 400;
`;

export const Social = styled.a`
  align-items: center;
  display: flex;
  gap: 0.5rem;

  color: var(--color-text-alt);
  font-weight: 600;
`;

export const Socials = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 18rem;
`;
