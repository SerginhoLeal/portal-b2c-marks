import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: center;

  /* flex-direction: column; */

  min-height: 50px;

  box-shadow: 1px 1px 5px #DEDEDE;

  max-width: 400px;

  margin: 5px 0;
`;

export const Svg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  span {
    position: absolute;
    right: 0;
    width: 1px;
    height: 15px;

    background-color: #dedede;
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
