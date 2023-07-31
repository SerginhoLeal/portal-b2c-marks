import styled, { css } from "styled-components";

import { colors } from '../../styles/theme';

interface Props {
  focus?: keyof typeof colors;
};

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin: 5px;
`;

export const Button = styled.button<Props>`
  position: relative;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  cursor: pointer;

  ${({ theme, focus = 'white' }) => css`
    background-color: ${theme.colors[focus]};
  `};

  ::after {
    content: '';
    position: absolute;
    left: 0px;
    height: 50%;
  };
`;

/*
  ${({ theme, focus }) => css`
    border-right: 1px solid ${position ? '#395FF5' : '#D9D9D9'};
  `};
*/