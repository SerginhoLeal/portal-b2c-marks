import React from 'react';

import * as Styles from './styles';

import { Text } from '..';
import { Amex, Elo, Hiper, HiperCard, MasterCard, NameLogo } from '@svg';

export const Footer: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Left>
        <NameLogo />
      </Styles.Left>
      <Styles.Center>

        <Styles.Info>
          <Styles.OptionsForClient>
            <Text color='white' fontWeight='medium' fontSize='small'>INFORMAÇÕES DA EMPRESA</Text>
            <br />
            <Text color='white' fontWeight='light' fontSize='xsmall'>Sobre a <strong>Marks Joias</strong></Text>
          </Styles.OptionsForClient>

          {/* <Styles.OptionsForClient>
            <Text color='white' fontWeight='medium' fontSize='small'>SERVIÇOS</Text>
            <br />
            <Text color='white' fontWeight='normal' fontSize='small'>Seu ticket</Text>
            <Text color='white' fontWeight='normal' fontSize='small'>Sacoleiras</Text>
          </Styles.OptionsForClient> */}
          
          <Styles.OptionsForClient>
            <Text color='white' fontWeight='semi_bold' fontSize='small'>ATENDIMENTO AO CLIENTE</Text>
            <br />
            <Text color='white' fontWeight='light' fontSize='xsmall'>Contate-nos</Text>
            <Text color='white' fontWeight='light' fontSize='xsmall'>Trocas e Devoluções</Text>
            <Text color='white' fontWeight='light' fontSize='xsmall'>Pontos Bônus</Text>
          </Styles.OptionsForClient>
        </Styles.Info>

        {/* <Text color='white' fontWeight='normal' fontSize='xsmall'>©2023-2023 Todos os direitos reservados <strong>MARK’S JOIAS</strong></Text> */}

      </Styles.Center>
      <Styles.Right>
        <Styles.Cards>
          <Text color='white' fontWeight='semi_bold'>Payments</Text>
          <MasterCard />
          <Hiper />
          <HiperCard />
          <Elo />
          <Amex />
        </Styles.Cards>
        <Text color='white' fontWeight='normal' fontSize='xsmall'>Made with ❤ by <strong>Sérgio Leal</strong></Text>
      </Styles.Right>
    </Styles.Container>
  )
};