import styled, { css } from 'styled-components';

interface PropsOpen {
  open: boolean;
};

export const Container = styled.div`
  width: 100%;

  margin-top: 10px;

  box-shadow: 1px 1px 5px #DEDEDE;
  border-radius: 2px;

  /* box-shadow: 1px 2px 5px 1px rgba(222,222,222,1);
  -webkit-box-shadow: 1px 2px 5px 1px rgba(222,222,222,1);
  -moz-box-shadow: 1px 2px 5px 1px rgba(222,222,222,1); */
`;

export const Title = styled.button<PropsOpen>`
  border: 0;

  background-color: #fff;

  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 0 10px;

  width: 100%;
  min-height: 40px;

  cursor: pointer;

  border-radius: 2px;

  svg {
    width: 15px;
    transition: .3s;
    ${({ open = false }) => open === true ? `transform:rotate(180deg)` : 'transform:rotate(0deg)'};
  };
`;

export const Options = styled.div<PropsOpen>`
  display: flex;

  flex-direction: column;

  width: 100%;

  ${({ open = false }) => css`
    height: ${open === true ? '30px' : '0px' };
  `}

  justify-content: space-between;
  /* align-items: center; */

  padding: 0 10px;

  transition: .3s;

  overflow-y: auto;
`;

export const CheckBox = styled.div`
  display: flex;

  margin-left: 10px;
  /* margin-bottom: 5px; */

  align-items: center;

  cursor: pointer;
`;

export const Check = styled.div`
  width: 15px;
  height: 15px;

  border-radius: 2px;
  
  border: 1px solid #888;
`;
