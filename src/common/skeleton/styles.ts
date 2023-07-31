import styled, { css } from "styled-components";

interface Props {
  width: number;
  height: number;
}

export const Container = styled.div<Props>`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `};

  margin: 5px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 2px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;