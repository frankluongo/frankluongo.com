import styled from "styled-components";

export const Skip = styled.a`
  left: -10000px;
  position: absolute;
  top: auto;
  z-index: 999999;

  width: 1px;
  height: 1px;

  color: var(--color-primary);

  background-color: var(--color-background);
  border-radius: 0 0 0.5rem 0;
  overflow: hidden;

  &:is(:focus) {
    top: 0;
    left: 0;

    height: auto;
    padding: 0.5rem 1rem;
    width: auto;

    border: 2px solid var(--color-primary);
    border-left: none;
    border-top: none;
  }
`;
