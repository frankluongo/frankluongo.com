import styled from "styled-components";

export const Typography = styled.div`
  color: var(${(p) => p.$color || "--color-text"});
`;

export default Typography;
