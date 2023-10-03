import Link from 'next/link';

import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;

  padding: 0 50px;

  /* flex-wrap: wrap; */

  @media (max-width: 635px)
    {
      align-items: center;
      flex-direction: column;
    }

  a{
    font-family: 'Poppins', sans-serif;
  }
`;

export const Aside = styled.aside`
  display: flex;

  flex-direction: column;

  width: 300px;
  /* box-shadow: 1px 1px 5px #DEDEDE; */

`;

export const Products = styled.article`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const InputContains = styled.div`
  display: flex;

  align-items: center;

  /* flex-direction: column; */

  min-height: 50px;

  /* box-shadow: 1px 1px 5px #DEDEDE; */

  max-width: 400px;

  /* margin: 5px 0; */
 
  button {
    display: flex;
    position: relative;

    border: 0;
    padding: 10px;
    background-color: transparent;

    cursor: pointer;

    span{
      position: absolute;
      left: 0;
      width: 1px;
      height: 22px;
      border-left: 1px solid #DEDEDE;
      border-left-style: dashed;
    }

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

export const Product = styled(Link)`
  position: relative;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 10px 10px 0;

  @media (max-width: 635px){
    margin: 10px 0 0 0;
  }

  border-radius: 2px;

  box-shadow: 1px 1px 5px #DEDEDE;

  cursor: pointer;

  footer {
    position: absolute;
    bottom: 0;

    display: flex;

    width: 100%;

    justify-content: space-between;
    align-items: center;

    padding: 15px 10px;

    border-radius: 0 0 5px 5px;

    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%, rgba(0,212,255,1) 100%);
  }
`;