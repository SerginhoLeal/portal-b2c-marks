import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: center;

  flex-direction: column;

  min-height: 50px;

  box-shadow: 1px 1px 5px #DEDEDE;

  max-width: 400px;

  margin: 5px 0;

  svg {
    width: 60px;
    ${({ type }: any) => type !== 'search' && 'border-right: 1px solid #DEDEDE'};
  }
`;

export const InputStyles = styled.input`
  border: 0;
  width: 100%;
  height: 100%;

  padding: 0 15px;

  color: #47474D;
  outline: none;

  font-family: 'Poppins', sans-serif;
`;

export const Button = styled.button`
  border: 0;

  width: 40px;

  background-color: #fff;
  
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  opacity: .5;

  svg {
    /* margin: 15px; */
    width: 35px;
  }
`;
