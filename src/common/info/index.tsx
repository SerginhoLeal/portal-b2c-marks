import React from 'react';

import { Button, Text, Input, TextDescription } from '@common';
import { ProductObject } from '@/interfaces';
import { Amex, Delivery, Diners, Elo, Hiper, HiperCard, MasterCard } from '@svg';

import * as Styles from './styles';

interface ProductProps {
  product: ProductObject;
  BuyNow(): void;
};

export const Info: React.FC<ProductProps> = ({ product, BuyNow }: ProductProps) => {

  return (
    <Styles.Container>
      <Text fontSize='xlarge' fontWeight='medium'>{product.name}</Text>
      <TextDescription color='text' fontWeight='normal'>{product.description}</TextDescription>
      <div style={{ height: 10 }} />
      <Text fontSize='xxlarge' fontWeight='semi_bold'>{product.price}</Text>
      <div style={{ height: 10 }} />
      {/* <Input
        // icon='delivery'
        name='delivery'
        placeholder='CEP'
        register={null}
        // type='cep'
      /> */}
      <div style={{ height: 10 }} />
      <Styles.Installments>

        {/* <Styles.InstallmentsHeader hasCard={product.card}>
          <span>
            {product.card.map((card, index) =>
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
            <Text fontWeight='normal'>de {product.price} sem juros</Text>
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
          <Text fontWeight='normal'>{product.price}</Text>
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
        buttonStyles={{ backgroundColor: 'success', borderColor: 'success' }}
      />
      {/* <Button reverse text='Adicionar ao carrinho' /> */}

    </Styles.Container>
  )
};
