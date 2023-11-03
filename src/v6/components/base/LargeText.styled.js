import styled from "styled-components";

import Typography from "#v6/components/base/Typography.styled";

export const LargeText = styled(Typography)`
  font-size: 1.25rem;
`;

LargeText.defaultProps = {
  as: "p",
};

export default LargeText;
