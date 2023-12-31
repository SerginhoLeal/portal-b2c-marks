import React from 'react';

import { Text } from '../typography';

import { ButtonProps } from './types';

import * as Styles from './styles';

export const Button: React.FC<ButtonProps> = ({
  buttonStyles = {
    backgroundColor: 'default',
    borderColor: 'default'
  },
  textStyles = {
    fontStyle: 'normal',
    fontWeight: 'normal',
    textColor: 'default'
  },

  text,
  onClick,

  type,
  loading,
  disabled,

  ...rest
}: ButtonProps) => {
  return (
    <Styles.Container type={type} disabled={disabled} buttonStyles={buttonStyles} onClick={onClick} {...rest}>
      {loading ?
        <Text
          color={textStyles.textColor} fontStyle={textStyles.fontStyle} fontWeight={textStyles.fontWeight}
        >loading...</Text>
      : 
        <Text
          color={textStyles.textColor} fontStyle={textStyles.fontStyle} fontWeight={textStyles.fontWeight}
        >{text}</Text>
      }
    </Styles.Container>
  );
};
