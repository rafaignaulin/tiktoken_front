import styled from "styled-components";

export const Title = styled.span<{ size: number }>`
  font-size: ${(props) => `${props.size / 2 + 0.5}rem`};
`;
