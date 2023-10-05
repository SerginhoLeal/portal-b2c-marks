// import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { api } from '@services';
import { Banner, Text } from '@common';
import { DataInitProps } from '@interfaces';

import * as Styles from './styles';

export default function Init({ recently, best_seller }: DataInitProps){
  return(
    <>
      {/* <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      /> */}

      <Banner />

      <Styles.Container>

        <Styles.TagName>
          <Text fontSize='xsmall' fontWeight='semi_bold' color='text'>Mais Vendidos</Text>

          <Link href='/products'>
            <Text fontStyle='italic' fontSize='xsmall' color='text'>Ver Mais</Text>
          </Link>
        </Styles.TagName>

        <Styles.Products>
          {best_seller.map(product => (
            <Styles.Product key={product.id} href={`/product/${product.id}`}>
    
              <Image
                src={product.thumbnail}
                width="300"
                height="300"
                alt={product.name}
                style={{
                  borderRadius: 5,
                  objectFit: 'cover',
                }}
              />

              <footer>
                <Text fontStyle='italic' fontSize='xsmall' color='white'>{product.name}</Text>
                <Text fontStyle='italic' fontWeight='semi_bold' color='white'>{product.price}</Text>
              </footer>
        
            </Styles.Product>
          ))}
        </Styles.Products>

        <br />

        <Styles.TagName>
          <Text fontSize='xsmall' fontWeight='semi_bold' color='text'>Mais Vendidos</Text>

          <Link href='/products'>
            <Text fontStyle='italic' fontSize='xsmall' color='text'>Ver Mais</Text>
          </Link>
        </Styles.TagName>

        <Styles.Products>
          {recently.map(product => (
            <Styles.Product key={product.id} href={`/product/${product.id}`}>

              <Image
                src={product.thumbnail}
                width="300"
                height="300"
                alt={product.name}
                style={{
                  borderRadius: 5,
                  objectFit: 'cover',
                }}
              />

              <footer>
                <Text fontStyle='italic' fontSize='xsmall' color='white'>{product.name}</Text>
                <Text fontStyle='italic' fontWeight='semi_bold' color='white'>{product.price}</Text>
              </footer>
        
            </Styles.Product>
          ))}
        </Styles.Products>

        <br />

      </Styles.Container>

    </>
  )
};

export const getStaticProps: GetStaticProps = async() => {
  const { data } = await api.get('/');

  /**
   * @recently
   * @best_seller
   */

  const recently = data.recently.map((rec: any) => ({
    ...rec,
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(rec.price),
  }))

  const best_seller = data.best_seller.map((rec: any) => ({
    ...rec,
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(rec.price)
  }))

  return {
    props: {
      recently,
      best_seller,
    },
    revalidate: 60 * 60 + 2
  }
};
