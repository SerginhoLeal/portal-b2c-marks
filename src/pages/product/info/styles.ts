import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 40%;
  padding: 0 20px;
`;

export const Installments = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;

  /* height: 50px; */
  padding: 10px;

  box-shadow: 1px 1px 5px #DEDEDE;
`;

export const InstallmentsHeader = styled.header<{hasCard: Array<string>}>`
  ${({ hasCard }) => css`
    display: ${hasCard.find(item => (item !== ('pix' || 'boleto'))) ? 'flex' : 'none'};
  `};

  align-items: center;
  justify-content: space-between;

  width: 100%;
  border-bottom: 1px solid #dedede;

  span {
    display: flex;
    align-items: center;
  }
`;

export const InstallmentsValues = styled.div`
  display: flex;

  flex-direction: column;

  width: 100%;

  padding: 10px 0;

  span {
    display: flex;
  }

  border-bottom: 1px solid #dedede;
`;

export const InstallmentsFooter = styled.footer`
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;

  span {
    display: flex;
    align-items: center;
  }

  svg{
    :nth-child(1){
      margin: 0px 2px 0 0;
    }
    margin: 2px;
  }
`;

export const Delivery = styled.div`
  display: flex;

  align-items: center;
`;