import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

export const Container = styled.button<ButtonProps>`
  border: 0;

  margin: 5px 0;

  height: 50px;

  border-radius: 2px;
  
  ${({ theme, width = 100, buttonStyles }) => css`
    width: ${width}%;

    border: 1px solid ${theme.colors[buttonStyles.borderColor]};
    background-color: ${theme.colors[buttonStyles.backgroundColor]};
  `};

  cursor: pointer;
`;
