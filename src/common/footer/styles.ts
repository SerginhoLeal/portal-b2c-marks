import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;

  align-items: center;

  width: 100%;
  height: 300px;

  background: rgb(250,11,91);
  background: linear-gradient(90deg, rgba(250,11,91,1) 0%, rgba(57,95,245,1) 100%, rgba(0,212,255,1) 100%);
`;

export const Left = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 30%;
  height: 100%;
`;

export const Center = styled.div`
  display: flex;
  
  width: 100%;
  height: 100%;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 20px 10px;
`;

export const Info = styled.div`
  display: flex;

  height: 100%;
`;

export const OptionsForClient = styled.div`
  display: flex;

  flex-direction: column;

  margin: 0 20px;

  height: 100%;

`;

// Right

export const Right = styled.div`
  display: flex;

  justify-content: space-between;
  flex-direction: column;

  padding: 20px 10px;

  width: 50%;
  height: 100%;
`;

export const Cards = styled.div`
  svg:first-child(){
    margin: 100px;
  };
`;