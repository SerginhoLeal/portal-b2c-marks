import React from 'react';

import * as Styles from './styles';

interface Props {
  quantity?: number;
  width: number;
  height: number;
}

export const Skeleton: React.FC<Props> = ({ quantity = 1, width, height, ...rest }: Props) => {
  return Array(quantity).fill(<Styles.Container width={width} height={height} {...rest} />)
};