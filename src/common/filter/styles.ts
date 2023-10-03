import styled, { css } from 'styled-components';

interface PropsOpen {
  open: boolean;
};

interface CheckProps {
  checked?: boolean;
};

export const Container = styled.div`
  width: 100%;

  margin-top: 10px;

  box-shadow: 1px 1px 5px #DEDEDE;
  border-radius: 2px;
`;

export const Button = styled.button<PropsOpen>`
  border: 0;

  background-color: #fff;

  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 0 10px 0 20px;

  width: 100%;
  min-height: 40px;

  cursor: pointer;

  border-radius: 2px;

  svg {
    transition: .3s;
    ${({ open = false }) => open === true ? `transform:rotate(180deg)` : 'transform:rotate(0deg)'};
  };
`;

export const Content = styled.div`
  display: flex;

  flex-wrap: wrap;

  justify-content: flex-start;

  margin: 0px 10px 10px 10px;

  border-top: 1px solid #dedede;
`;

export const Options = styled.div<CheckProps>`
  display: flex;

  margin: 3px 6px;

  padding: 2px 4px;

  transition: .3s;

  border-radius: 2px;

  cursor: pointer;

  ${({ theme, checked }) => css`
    background-color: ${!!checked ? theme.colors.primary : theme.colors.white};
  `};
`;
