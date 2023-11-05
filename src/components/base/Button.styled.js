import styled from "styled-components";

const sizes = {
  default: "0.75rem 1rem",
  small: "0.25rem",
};

const variants = {
  alternate: {
    color: `var(--color-primary)`,
    colorHover: `var(--color-text-alt)`,
    backgroundHover: `var(--color-primary)`,
    border: `var(--color-primary)`,
  },
  default: {
    color: `var(--color-text-alt)`,
    colorHover: `var(--color-text)`,
    backgroundHover: `var(--color-background)`,
    border: `var(--color-background)`,
  },
};

const size = (p) => {
  return sizes[p.$size] || sizes.default;
};

const variant = (p) => {
  return variants[p.$variant] || variants.default;
};

export const Button = styled.button`
  --border-radius: 0.5rem;

  position: relative;

  align-items: center;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding: ${size};

  color: ${(p) => variant(p).color};
  font-weight: 600;
  text-decoration: none;

  appearance: none;
  background-color: transparent;
  border: 1px solid ${(p) => variant(p).border};
  border-radius: var(--border-radius);
  cursor: pointer;

  transform: skewX(-2deg);
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:is(:focus, :hover) {
    color: ${(p) => variant(p).colorHover};

    background-color: ${(p) => variant(p).backgroundHover};
  }
`;

export default Button;
