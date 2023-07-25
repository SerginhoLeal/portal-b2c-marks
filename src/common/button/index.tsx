import React from 'react';

import { Text } from '../typography';

import { ButtonProps } from './interface';

import * as Styles from './styles';

export const Button: React.FC<ButtonProps> = ({ text, reverse, onClick, ...rest }: ButtonProps) => {
  return (
    <Styles.Container reverse={reverse} onClick={onClick} {...rest}>
      <Text color={reverse ? 'success': 'white'} fontWeight='large'>{text}</Text>
    </Styles.Container>
  );
};
