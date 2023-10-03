import React from 'react';
import Image from 'next/image';

import { ProductObject } from '@interfaces';

import * as Styles from './styles';

interface ProductProps {
  product: ProductObject;
  isLoading: boolean;
};

const Images: React.FC<ProductProps> = ({ product, isLoading }: ProductProps) => {
  const [indexImage, setIndexImage] = React.useState(0);

  return (
    <Styles.Container>
      <OtherImage isLoading={isLoading} product={product} indexImage={indexImage} setIndexImage={setIndexImage} />
      <MainImage isLoading={isLoading} product={product} indexImage={indexImage} />
    </Styles.Container>
  )
};

const MainImage = ({product, isLoading, indexImage}: any) => {
  if(isLoading){
    return <Styles.SkeletonStyle width={500} height={500} />
  };

  return (
    <Styles.Main>
      {/* {
        product.files[indexImage].type === 'image'
        ? <img src={product.files[indexImage].file} alt='' />
        : <video src={product.files[indexImage].file} controls style={{ border: 0 }} />
      } */}
      <Image
        width={500}
        height={500}
        src={product.files[indexImage].file}
        alt={product.files[indexImage].name}
      />
    </Styles.Main>
  )
}

const OtherImage = ({product, isLoading, indexImage, setIndexImage}: any) => {
  if(isLoading){
    return (
      <Styles.Other>
        <Styles.SkeletonStyle quantity={5} width={96} height={96} />
      </Styles.Other>
    )
  };

  return (
    <Styles.Other>
      {product.files.map((images: any, index: number) =>
        <img key={index.toString()} alt={images.name} src={images.file}
          onClick={() => setIndexImage(index)}
          style={{ opacity: indexImage === index ? .5 : 1, cursor: 'pointer' }}
        />
      )}
    </Styles.Other>
  )
}

export default Images;
