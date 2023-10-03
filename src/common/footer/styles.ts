import styled from 'styled-components';

import Link from 'next/link';

export const Container = styled.footer`
  display: flex;

  align-items: center;

  width: 100%;
  height: 200px;

  background: rgb(250,11,91);
  background: linear-gradient(90deg, rgba(250,11,91,1) 0%, rgba(57,95,245,1) 100%, rgba(0,212,255,1) 100%);

  @media (max-width: 600px){
    flex-direction: column;
    height: auto;
  }
`;

export const Left = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 30%;
  height: 100%;

  @media (max-width: 600px){
    display: none;
  }
`;

export const Center = styled.div`
  display: flex;
  
  width: 100%;
  height: 100%;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 20px 10px;

  @media (max-width: 900px){
    height: auto;
  }

`;

export const Info = styled.div`
  display: flex;

  flex-wrap: wrap;

  @media (max-width: 900px){
    height: auto;
    div {
      margin: 0 20px 7px 0;
    }
  }
`;

export const OptionsForClient = styled.div`
  display: flex;

  flex-direction: column;

  margin: 0 20px;

  height: 100%;

  @media (max-width: 900px){
    height: auto;
    br {
      display: none;
    }
  }
`;

// Right

export const Right = styled.div`
  display: flex;

  justify-content: space-between;
  flex-direction: column;

  padding: 20px 10px;

  width: 500px;
  height: 100%;

  @media (max-width: 600px){
    width: 100%;
    padding: 10px;
  }
`;

export const Cards = styled.div`
  svg:first-child(){
    margin: 100px;
  };
`;

export const LinkStyles = styled(Link)`
`;