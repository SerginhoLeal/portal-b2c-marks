import React from 'react';
import Stripe from 'stripe';

import { GetServerSideProps } from 'next';

import { stripe } from '@services';
import { Title, Text, Button, Strong } from '@common';
import { MasterCard, Hiper, HiperCard, Elo, Amex } from '@svg';

import * as Styles from './styles';
import Image from 'next/image';

interface Props {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

export default function Success({ customerName, product }: Props){
  console.log(product);

  return (
    <Styles.Container>

      <Styles.Banner>
        <svg width="292" height="292" viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M126.866 3.92564C139.117 -1.14906 152.883 -1.14906 165.134 3.92563L232.932 32.0083C245.183 37.083 254.917 46.8167 259.992 59.0682L288.074 126.866C293.149 139.117 293.149 152.883 288.074 165.134L259.992 232.932C254.917 245.183 245.183 254.917 232.932 259.992L165.134 288.074C152.883 293.149 139.117 293.149 126.866 288.074L59.0682 259.992C46.8168 254.917 37.083 245.183 32.0084 232.932L3.92564 165.134C-1.14906 152.883 -1.14906 139.117 3.92563 126.866L32.0083 59.0682C37.083 46.8168 46.8167 37.083 59.0682 32.0084L126.866 3.92564Z" fill="url(#paint0_linear_988_6802)"/>
          <defs>
            <linearGradient id="paint0_linear_988_6802" x1="146" y1="-4" x2="146" y2="296" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FA0B5B"/>
              <stop offset="1" stop-color="#395FF5"/>
            </linearGradient>
          </defs>
        </svg>

        <Image
          width={250}
          height={250}
          alt={product.name}
          src={product.imageUrl}
          style={{ position: 'absolute', borderRadius: 150 }}
        />
      </Styles.Banner>

      <span style={{ height: 10 }} />

      <Title color='success' fontWeight='semi_bold'>Recebemos o seu “Pagamento”!</Title>

      <span style={{ height: 10 }} />

      <Text fontSize='xlarge' fontWeight='normal'>Valor do Pagamento: <Strong color='success' fontWeight='bold' fontSize='xxlarge'>R$ 147.25</Strong></Text>

      <span style={{ height: 10 }} />

      <Styles.Description>
        <Text fontWeight='normal'>O <Strong fontWeight='bold'>Conjunto de Cordões</Strong> já está sendo encaminhado para a nossa equipe de logistica, acompanhe o progresso no seu perfil clicando aqui.</Text>
      </Styles.Description>

      <span style={{ height: 10 }} />

      <Button
        width={30}
        text='Voltar para Tela Principal'
        buttonStyles={{ backgroundColor: 'white', borderColor: 'text' }}
        textStyles={{ textColor: 'text', fontStyle: 'italic', fontWeight: 'light' }}
      />

      <span style={{ height: 50 }} />

      <Styles.Footer>
        <Text color='white'>Formas de Pagamentos</Text>
        <Styles.Cards>
          <MasterCard />
          <Hiper />
          <HiperCard />
          <Elo />
          <Amex />
        </Styles.Cards>
        <Text color='white' fontWeight='normal' fontSize='xsmall'>Made with ❤ by <Strong>Sérgio Leal</Strong></Text>
      </Styles.Footer>

    </Styles.Container>
  )
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if(!query.session_id){
    return {
      // notFound: true,
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id);
  // console.log(sessionId);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });
  // console.log(session);

  const customerName = session.customer_details?.name;
  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0]
      }
    }
  }
};

// http://localhost:3000/success?session_id=cs_test_a1m1OS7uxeuVUhd6wblsIHdBJKpIwokBKnUiwx5nIX7mhfPhf4riBImStq
// https://freefrontend.com/css-hexagons/