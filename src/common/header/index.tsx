import React from 'react';

import Image from 'next/image';

import { Logo, HiperCard } from '@svg';

import * as Styles from './styles';

import ImageLogo from '../../assets/img/Logo.png';

export const Header: React.FC = () => {
  return (
    <Styles.Container>
      <Image src={ImageLogo} width={20} height={25} alt='logo' />
      {/* <Styles.Nav>
        <Styles.Link>Inicio</Styles.Link>
        <Styles.Link>Rastreamento</Styles.Link>
      </Styles.Nav>
      <HiperCard width={30} height={30} /> */}
    </Styles.Container>
  )
};