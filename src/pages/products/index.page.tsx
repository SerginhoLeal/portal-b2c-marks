import React from 'react';
import { GetStaticProps } from 'next';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Banner, Button, Filter, Footer, Header, Input, Paginate } from '@common';
import { api } from '@services';
import { DataProps } from '@/interfaces';

import * as Styles from './styles';
import { Filter as FilterSvg } from '@/assets/svg';

import Product from './product';

export default function Home({ products, filter }: DataProps){
  // const [products, setProducts] = React.useState<any[]>([]);

  const { register } = useForm<any>();

  // React.useEffect(() => {
  //   (() => {
  //     api.post('/products', { starting_after: undefined }).then((response) => setProducts(response.data))
  //   })();
  // }, []);

  return(
    <React.Fragment>
      <Styles.Container>

        <Styles.Aside>

          <Styles.InputContains>
            <Styles.InputStyles placeholder='Pesquisar' {...register('search')} />
            <button>
              <span></span>
              <FilterSvg />
            </button>
          </Styles.InputContains>

          <Filter data={filter} />

        </Styles.Aside>

        <Styles.Products>
          <Product data={products} />
        </Styles.Products>

      </Styles.Container>

      <Paginate quantity={2} LoadMore={() => {}} />

    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data: filter } = await api.get('/filter');
  const { data: products } = await api.get('/products');

  const map = products.map((rec: any) => ({
    ...rec,
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(rec.price)
  }))

  return {
    props: {
      products: map,
      filter
    },
    revalidate: 60 * 60 + 2
  }
}