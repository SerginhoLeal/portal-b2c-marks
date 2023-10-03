import React from 'react';

import { Button, Text, Input, TextDescription } from '@common';
import { ProductObject } from '@/interfaces';
import { Amex, Delivery, Diners, Elo, Hiper, HiperCard, MasterCard } from '@svg';

import * as Styles from './styles';

interface ProductProps {
  isLoading?: boolean;
  product: ProductObject;
  BuyNow(): void;
};

const description = `
I'm a Succubus Irl, but you can call me Mistress Kaguya 😈
I try to lead a healthy (eating male souls) and active lifestyle (daily stepping on my slaves) ♡

 What do i post here ?
-lewd secret spicy pics (🍑, 🦶and a lot of stockings) and of course my bear !
 

My content is piracy/copyright protected! I own all rights to my content. By joining you are agreeing that you will not distribute, save, or share my content. Legal actions will be taken against you if you break these rules.
`;

const Info: React.FC<ProductProps> = ({ isLoading, product, BuyNow }: ProductProps) => {
  const loading = { isLoading: !!isLoading, width: '100%', height: 28 };

  return (
    <Styles.Container>
      <Text loading={loading} fontSize='xlarge' fontWeight='semi_bold'>{product?.name}</Text>
      <div style={{ height: 10 }} />
      <TextDescription color='text' fontWeight='normal'>{product?.description || description}</TextDescription>
      <div style={{ height: 10 }} />
      <Text color='success' fontWeight='normal'>Disponível em estoque</Text>
      <div style={{ height: 10 }} />
      <Text loading={loading} fontSize='xxlarge' fontWeight='semi_bold'>{product?.price}</Text>

      <Input icon={() => <Delivery />} name='delivery' placeholder='CEP' register={null} />

      <div style={{ height: 10 }} />
      <Styles.Installments>

        {/* <Styles.InstallmentsHeader hasCard={product?.card}>
          <span>
            {product?.card.map((card, index) =>
              (card !== 'boleto' && card !== 'pix') && <Icons key={index} icon={card} />
            )}
          </span>
          <Text color='secondary' fontWeight='xsmall'>Parcelas</Text>
        </Styles.InstallmentsHeader> */}

        {/* <div style={{ height: 5 }} /> */}

        <Styles.InstallmentsValues>
          <span>
            <Text fontWeight='semi_bold'>1x</Text>
            &nbsp;
            <Text fontWeight='normal'>de {product?.price} sem juros</Text>
          </span>
          {/* <span>
            <Text color='secondary' fontWeight='large'>2x</Text>
            &nbsp;
            <Text color='secondary' fontWeight='xsmall'>de R$ 21,99 sem juros</Text>
          </span> */}
        </Styles.InstallmentsValues>

        <div style={{ height: 5 }} />

        <Styles.InstallmentsFooter>
          <span>
            <MasterCard />
            <Diners />
            <Elo />
            <Hiper />
            <HiperCard />
            <Amex />
          </span>
          <Text fontWeight='normal'>{product?.price}</Text>
        </Styles.InstallmentsFooter>
      </Styles.Installments>

      <div style={{ height: 5 }} />

      <Styles.Delivery>
        <Delivery />
        &nbsp;
        <Text color='success' fontWeight='medium' fontSize='xsmall'>Enviamos para todo o Brasil</Text>
      </Styles.Delivery>

      <div style={{ height: 5 }} />

      <Button
        onClick={BuyNow}
        text='Comprar agora'
        textStyles={{ textColor: 'white', fontWeight: 'semi_bold' }}
        buttonStyles={{ backgroundColor: 'primary', borderColor: 'primary' }}
      />
      {/* <Button reverse text='Adicionar ao carrinho' /> */}

    </Styles.Container>
  )
};

export default Info;