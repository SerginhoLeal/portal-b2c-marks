import React from 'react';

import Image from 'next/image';

import { ProductObject } from '@/interfaces';
import { Text } from '..';

import * as Styles from './styles';

interface Props {
  data: Array<ProductObject>;
};

export const Products: React.FC<Props> = ({ data }: Props) => {
  if(data.length === 0){
    return <Styles.SkeletonStyle quantity={6} width={300} height={300} />
  };

  return data.map((product) => (
    <Styles.Container key={product.id} href={`/product/${product.id}`}>

      <Image src={product.image} width="300" height="300" alt={product.name} style={{ borderRadius: 5 }} />

      <Styles.Info>
        <Text fontStyle='italic' fontSize='xsmall' color='white'>{product.name}</Text>
        <Text fontStyle='italic' fontWeight='semi_bold' color='white'>{product.price}</Text>
      </Styles.Info>

    </Styles.Container>
  ))
};
