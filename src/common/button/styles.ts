import styled, { css } from 'styled-components';

interface Props {
  width?: number;
  reverse?: boolean;
};

export const Container = styled.button<Props>`
  border: 0;

  margin: 5px 0;

  height: 50px;

  border-radius: 2px;
  border: 1px solid #395FF5;

  ${({ theme, reverse, width }) => css`
    width: ${width ? width : 100}%;
    background-color: ${reverse ? theme.colors.white : theme.colors.button_default};
  `};

  cursor: pointer;
`;
// background-color: ${reverse ? '#FFFFFF' : '#47C747'};
