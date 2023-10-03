import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 50px;

  a{
    font-family: 'Poppins', sans-serif;
    padding: 0;
    margin: 0;
  }
`;

export const Products = styled.article`
  display: flex;
  width: 100%;

  padding: 0;
  margin: 0;

  justify-content: space-between;
`;

export const TagName = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  align-items: center;

  a {
    padding: 10px;

    background-color: transparent;
    border: 0;
  }
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

// export const SeeMore = styled.button`
//   font-family: 'Poppins', sans-serif;

//   border: 0;
//   background-color: transparent;

//   max-width: 150px;
//   padding: 10px 10px;
//   margin: 10px;
// `;
