import styled from 'styled-components';

export const Container = styled.main`
  display: flex;

  padding: 0 50px;

  a{
    font-family: 'Poppins', sans-serif;
  }
`;

export const Aside = styled.aside`
  display: flex;

  flex-direction: column;

  width: 300px;
`;

export const Products = styled.article`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  justify-content: center;
`;