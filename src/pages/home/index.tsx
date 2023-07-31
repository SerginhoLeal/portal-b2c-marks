import React from 'react';
import { GetStaticProps } from 'next';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Banner, Button, Products, Filter, Footer, Header, Input, Paginate } from '@common';
import { useMainContext } from '@context';
import { api } from '@services';

import * as Styles from './styles';

export default function Home(){
  const [products, setProducts] = React.useState<any[]>([]);

  const { filter } = useMainContext();
  
  const { register } = useForm<any>();

  React.useEffect(() => {
    (() => {
      api.post('/products', { starting_after: undefined }).then((response) => setProducts(response.data))
    })();
  }, []);

  return(
    <React.Fragment>
      <Header />
      <Banner />

      <Styles.Container>

        <Styles.Aside>
          <Input placeholder='Pesquisar' name='search' register={register} />
          <Filter data={filter} />
        </Styles.Aside>

        <Styles.Products>
          <Products data={products} />
        </Styles.Products>

      </Styles.Container>

      <Paginate quantity={2} LoadMore={() => {}} />

      <Footer />
    </React.Fragment>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const data = await api.post('/filter');
//   console.log(data);

//   return {
//     props: {
//       filter: []
//     },
//     revalidate: 60 * 60 + 2
//   }
// }