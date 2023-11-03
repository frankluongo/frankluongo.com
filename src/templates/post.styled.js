import styled from "styled-components";
import BaseContainer from "#v6/components/base/Container.styled";

export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block: clamp(3rem, 8vw, 6rem);
`;
