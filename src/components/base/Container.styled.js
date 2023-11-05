import styled from "styled-components";

export const Container = styled.div`
  margin-inline: auto;
  max-width: ${(p) => (p.$variant === "blog" ? "65rem" : "80rem")};
  padding-inline: clamp(1rem, 5vw, 4rem);
  width: 100%;
`;

export default Container;
