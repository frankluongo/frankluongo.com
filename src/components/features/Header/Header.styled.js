import styled from "styled-components";
import { Link } from "gatsby";
import BaseContainer from "#base/Container.styled";

export const Container = styled(BaseContainer)`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const Header = styled.header`
  left: 0;
  position: fixed;
  top: 0;
  z-index: 99;

  width: 100%;

  background: var(--color-background-alt-transparent-5);
`;

export const Navigation = styled.nav``;

export const NavList = styled.ul`
  align-items: center;
  display: flex;
  gap: ${(p) => p.$gap || "1rem"};
  justify-content: center;

  @media (min-width: 1280px) {
    & {
      gap: ${(p) => p.$gap || "2rem"};
    }
  }
`;

export const NavLink = styled(Link)`
  position: relative;

  display: block;
  padding-block: 0.75rem;

  color: var(--color-text-alt);
  font-size: 0.75rem;
  font-style: italic;
  font-weight: 900;
  text-decoration: none;

  &::before {
    left: 50%;
    position: absolute;
    top: 50%;
    z-index: -1;

    display: block;
    height: 1rem;
    width: 105%;

    background: var(--color-primary);
    content: "";
    opacity: 0;
    transform: translate(-50%, -50%) rotate(-2deg);
    transition: opacity 0.2s ease-in-out;
  }

  &:is(:focus, :hover)::before {
    opacity: 1;
  }

  @media (min-width: 700px) {
    font-size: 1rem;
  }
`;
