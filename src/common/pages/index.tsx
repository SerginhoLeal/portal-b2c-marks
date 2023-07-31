import React from 'react';

import { Skeleton, Text } from '..';

import * as Styles from './styles';

interface Props {
  quantity: number;
  LoadMore: () => void;
};

export const Paginate: React.FC<Props> = ({ quantity = 0, LoadMore }: Props) => {
  const [position, setPosition] = React.useState(1);

  let data: number[] = [];

  for (let index = 0; index < quantity; index++) {
    data.push(index)
  };

  const handleOnClick = (page: number) => {
    setPosition(page + 1);
    LoadMore();
  };

  return (
    <Styles.Container>
      {
        data.length === 0 ? <Skeleton width={250} height={50} /> :
        data.map((fil, index) =>
          <Styles.Button key={index.toString()} focus={position === (fil + 1) ? 'text' : 'white'} onClick={() => handleOnClick(fil)}>
            <Text fontWeight='semi_bold' color={position === (fil + 1) ? 'white' : 'text'}>{fil + 1}</Text>
          </Styles.Button>
        )
      }
    </Styles.Container>
  )
};