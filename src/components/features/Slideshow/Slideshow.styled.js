import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1rem 1fr;
  max-width: 50rem;
`;

export const Content = styled.article`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  padding: 1rem;

  background: var(--color-background);
  border: 1px solid var(--color-border);
  box-shadow: 0px 1px 8px var(--color-box-shadow);
  border-radius: 0.5rem;
`;

export const ContentFooter = styled.footer`
  display: flex;
  gap: 0.5rem;

  font-style: italic;
`;

export const ContentImageWrapper = styled.figure`
  position: relative;
  padding-top: 100%;

  background-color: var(--color-primary-alt);

  [data-gatsby-image-wrapper] {
    inset: 0;
    position: absolute;

    height: 100%;
    width: 100%;

    object-fit: cover;
  }
`;

export const ContentLink = styled.a`
  font-weight: 600;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Control = styled.button`
  background-color: var(--color-primary-alt);

  height: 1rem;
  margin: 0;
  padding: 0;
  width: 1rem;

  appearance: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: ${(p) => (p.$active ? 1 : 0.25)};
  transition: opacity 150ms ease-in-out;

  &:is(:active, :focus, :hover) {
    opacity: 1;
  }
`;

export const Controls = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;
