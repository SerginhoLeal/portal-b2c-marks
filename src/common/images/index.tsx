import React from 'react';

import * as Styles from './styles';
import { ProductObject } from '@/interfaces';

interface ProductProps {
  product: ProductObject
};

export const Images: React.FC<ProductProps> = ({ product }: ProductProps) => {
  // const [indexImage, setIndexImage] = React.useState(0);

  return (
    <Styles.Container>
      {/* <Styles.Other>
        {files.map((images, index) =>
          <img key={index.toString()} alt={images.type} src={images.preview || images.file}
            onClick={() => setIndexImage(index)}
            style={{ opacity: indexImage === index ? .5 : 1, cursor: 'pointer' }}
          />
        )}
      </Styles.Other> */}
      <Styles.Main>
        {/* {
          files[indexImage].type === 'image'
          ? <img src={files[indexImage].file} alt='' />
          : <video src={files[indexImage].file} controls style={{ border: 0 }} />
        } */}
        <img src={product.image} alt='' />
      </Styles.Main>
    </Styles.Container>
  )
};
