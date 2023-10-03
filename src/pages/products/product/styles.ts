import styled from 'styled-components';
import { Skeleton } from '@common';

import Link from 'next/link';

export const Container = styled(Link)`
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
`;

export const Info = styled.footer`
  position: absolute;
  bottom: 0;

  display: flex;

  width: 100%;

  justify-content: space-between;
  align-items: center;

  padding: 15px 10px;

  border-radius: 0 0 5px 5px;

  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%, rgba(0,212,255,1) 100%);
`;

export const SkeletonStyle = styled(Skeleton)`
  margin: 5px;
`;